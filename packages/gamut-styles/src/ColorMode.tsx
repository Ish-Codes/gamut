import { serializeTokens, StyleProps, variance } from '@codecademy/variance';
import { CSSObject, Theme, ThemeProvider, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { mapValues } from 'lodash';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import { scrollbarColors } from './styles/scrollbar';
import {
  color,
  flex,
  grid,
  layout,
  positioning,
  space,
} from './variance/props';
import { styledConfig } from './variance/utils';

export type ColorModeConfig = Theme['colorModes']['modes'];
export type ColorModes = keyof ColorModeConfig;
export type ColorModeShape = ColorModeConfig[ColorModes];
export type ColorAlias = keyof ColorModeShape;

export type ColorModeProps = {
  mode: ColorModes;
  bg?: keyof Theme['colors'];
  className?: string;
};

export const providerProps = variance.compose(
  layout,
  color,
  grid,
  flex,
  positioning,
  space
);

export const VariableProvider = styled('div', styledConfig)<
  StyleProps<typeof providerProps> & {
    variables?: CSSObject;
    alwaysSetVariables?: boolean;
  }
>(({ variables }) => variables, scrollbarColors, providerProps);

export const ColorMode = forwardRef<
  HTMLDivElement,
  ColorModeProps & ComponentProps<typeof VariableProvider>
>(({ mode, alwaysSetVariables, ...rest }, ref) => {
  const theme = useTheme();
  const {
    colorModes: { modes, active },
    colors,
  } = theme;
  const { variables } = useMemo(
    () =>
      serializeTokens(
        mapValues(modes[mode], (color) => colors[color]),
        'color',
        theme
      ),
    [colors, mode, modes, theme]
  );
  if (active === mode) {
    return (
      <VariableProvider
        {...rest}
        ref={ref}
        variables={alwaysSetVariables ? variables : undefined}
      />
    );
  }

  return (
    <ThemeProvider theme={{ colorModes: { modes, active: mode } }}>
      <VariableProvider
        variables={variables}
        textColor="text"
        {...rest}
        ref={ref}
      />
    </ThemeProvider>
  );
});
