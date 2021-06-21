import { mapValues, merge } from 'lodash';

import { CSSObject } from '../types/props';
import { AbstractTheme } from '../types/theme';
import { flattenScale, LiteralPaths } from '../utils/flattenScale';
import { KeyAsVariable, serializeTokens } from '../utils/serializeTokens';
import { ColorModeConfig, MergeTheme, PrivateThemeKeys } from './types';

class ThemeBuilder<T extends AbstractTheme> {
  #theme = {} as T;

  constructor(baseTheme: T) {
    this.#theme = baseTheme;
  }
  /**
   *
   * @param key A key of the current theme to transform into CSS Variables and Variable References
   * @example .createScaleVariables('fontSize')
   */
  createScaleVariables<Key extends keyof Omit<T, 'breakpoints'> & string>(
    key: Key
  ): ThemeBuilder<
    MergeTheme<
      T,
      PrivateThemeKeys,
      Record<Key, Record<Key, KeyAsVariable<T[Key], Key>>>
    >
  > {
    const { variables, tokens } = serializeTokens(
      this.#theme[key],
      key,
      this.#theme
    );

    this.#theme = merge({}, this.#theme, {
      [key]: tokens,
      _variables: { root: variables },
      _tokens: {
        [key]: this.#theme[key],
      },
    });

    return this;
  }

  /**
   *
   * @param colors A map of color tokens to add to the theme. These tokens are immediately converted to CSS Variables `--color-${key}`.
   * @example .addColors({ navy: 'navy', hyper: 'purple' })
   */
  addColors<
    Colors extends Record<string, string | number | CSSObject>,
    NextColors extends LiteralPaths<Colors, '-'>
  >(
    colors: Colors
  ): ThemeBuilder<
    MergeTheme<
      T & PrivateThemeKeys,
      Record<'colors', KeyAsVariable<NextColors, 'color'>>
    >
  > {
    const flatColors = flattenScale(colors);
    const { variables, tokens } = serializeTokens(
      flatColors,
      'color',
      this.#theme
    );
    this.#theme = merge({}, this.#theme, {
      colors: tokens,
      _variables: { root: variables },
      _tokens: { colors: flatColors },
    });

    return this;
  }

  /**
   *
   * @param initialMode A key of the object passed for modes.  This sets the default state for the theme and transforms the correct variables.
   * @param modes A map of color modes with keys of each possible mode with a value of alias to color keys.  This must be called after `addColors`
   * @example .addColorModes('light', { light: { primary: 'hyper' }, { dark: { primary: 'navy' } } })
   */
  addColorModes<
    Modes extends string,
    InitialMode extends keyof Config,
    Colors extends keyof T['colors'],
    ModeColors extends ColorModeConfig<Colors>,
    Config extends Record<Modes, ModeColors>
  >(
    initialMode: InitialMode,
    modes: Config
  ): ThemeBuilder<
    MergeTheme<
      T & PrivateThemeKeys,
      {
        colors: KeyAsVariable<
          LiteralPaths<Config[keyof Config], '-', '_'>,
          'colors'
        > &
          T['colors'];
        modes: { [K in keyof Config]: LiteralPaths<Config[K], '-', '_'> };
        mode: keyof Config;
        _getColorValue: (color: keyof T['colors']) => string;
      }
    >
  > {
    // This guarantees that the final merged color modes are used when setting the default variables
    const merged = merge({}, this.#theme?.modes, modes) as Config;

    const { tokens, variables } = serializeTokens(
      mapValues(
        flattenScale(merged[initialMode]),
        (color) => this.#theme.colors[color]
      ),
      'color',
      this.#theme
    );

    this.#theme = merge({}, this.#theme, {
      colors: tokens,
      modes: mapValues(modes, (mode) => flattenScale(mode)),
      mode: initialMode,
      _getColorValue: (color: keyof T['colors']) =>
        this.#theme._tokens?.colors?.[color],
      _variables: { mode: variables },
      _tokens: {
        modes: mapValues(modes, (mode) => {
          const modeColors = flattenScale(mode);

          return mapValues(
            modeColors,
            (color) => this.#theme._tokens.colors[color]
          );
        }),
      },
    });

    return this;
  }

  /**
   *
   * @param key A new key of theme
   * @param createScale A function that accepts the current theme and returns a new object of scale values.
   * @example .addScale('fonts', () => ({ basic: 'Gotham', cool: 'Wingdings' }))
   */
  addScale<
    Key extends string,
    Fn extends (
      theme: T
    ) => Record<
      string | number,
      string | number | Record<string, string | number>
    >,
    NewScale extends LiteralPaths<ReturnType<Fn>, '-'>
  >(
    key: Key,
    createScale: Fn
  ): ThemeBuilder<MergeTheme<T, Record<Key, NewScale>>> {
    this.#theme = merge({}, this.#theme, {
      [key]: flattenScale(createScale(this.#theme)),
    });
    return this;
  }

  /**
   *
   * @param key A current key of theme to be updated with new or computed values
   * @param updateFn A function that accepts an argument of the current values at the specified keys an returns a map of new values to merge.
   * @example .updateScale('fonts', ({ basic }) => ({ basicFallback: `{basic}, Montserrat` }))
   */
  updateScale<
    Key extends keyof T,
    Fn extends (tokens: T[Key]) => Record<string | number, unknown>
  >(
    key: Key,
    updateFn: Fn
  ): ThemeBuilder<T & Record<Key, T[Key] & ReturnType<Fn>>> {
    this.#theme = merge({}, this.#theme, { [key]: updateFn(this.#theme[key]) });

    return this;
  }

  /**
   * This finalizes the theme build and returns the final theme and variables to be provided.
   */
  build(): T & PrivateThemeKeys {
    return merge({}, this.#theme, { _variables: {}, _tokens: {} });
  }
}

export function createTheme<T extends AbstractTheme>(base: T) {
  return new ThemeBuilder(base);
}