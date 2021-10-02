import {
  css,
  states,
  styledOptions,
  system,
  variant,
} from '@codecademy/gamut-styles';
import { StyleProps } from '@codecademy/variance';
import styled from '@emotion/styled';

const listVariants = variant({
  prop: 'variant',
  defaultVariant: 'slat',
  base: {
    listStyleType: 'none',
    p: 0,
    m: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    slat: {
      borderRadius: '2px',
    },
    table: {},
    bar: {
      gap: 16,
    },
  },
});

export interface ListProps
  extends StyleProps<typeof listVariants>,
    StyleProps<typeof spacingVariants> {}

export const ListEl = styled(
  'ul',
  styledOptions<'ul'>()
)<ListProps>(listVariants);

const rowStates = states({
  scrollable: {
    minWidth: 'min-content',
    width: '100%',
  },
  expanded: {
    display: 'flex',
    flexDirection: { xs: 'column' },
  },
});

const spacingVariants = variant({
  prop: 'spacing',
  variants: {
    normal: {
      gap: { _: 8, xs: 40 },
    },
    condensed: {
      fontSize: 14,
      gap: { _: 8, xs: 32 },
    },
  },
});

const rowVariants = variant({
  prop: 'variant',
  variants: {
    slat: {
      bg: 'background',
      border: 1,
      borderTop: 'none',
      '&:first-of-type': {
        borderTop: 1,
      },
    },
    table: {
      bg: 'background',
      '&:nth-of-type(2n)': {
        bg: 'background-selected',
      },
    },
    bar: {
      border: 1,
      borderRadius: '2px',
      bg: 'background',
    },
  },
});

export interface RowProps
  extends StyleProps<typeof rowVariants>,
    StyleProps<typeof spacingVariants>,
    StyleProps<typeof rowStates> {}

export const RowEl = styled('li', styledOptions<'li'>())<RowProps>(
  css({
    py: { _: 8, xs: 0 },
    display: { _: 'grid', xs: 'flex' },
    gridAutoRows: 'minmax(1.5rem, max-content)',
    gridTemplateColumns: 'minmax(0, 1fr) max-content',
    flexDirection: { _: 'column', xs: 'row' },
    bg: 'inherit',
  }),
  rowVariants,
  spacingVariants,
  rowStates
);

const headerVariants = variant({
  prop: 'variant',
  variants: {
    slat: {},
    bar: {},
    table: {
      borderBottom: 2,
    },
  },
});

export interface HeaderProps
  extends StyleProps<typeof spacingVariants>,
    StyleProps<typeof rowStates>,
    StyleProps<typeof listVariants> {}

export const HeaderEl = styled('div', styledOptions)<HeaderProps>(
  css({
    display: { _: 'none', xs: 'flex' },
    position: { _: 'initial', xs: 'sticky' },
    flexDirection: ['column', 'row'],
    top: 0,
    bg: 'background-current',
    zIndex: 2,
    fontFamily: 'accent',
  }),
  spacingVariants,
  rowStates,
  headerVariants
);

const columnType = variant({
  prop: 'type',
  defaultVariant: 'content',
  variants: {
    header: {
      gridColumn: 1,
      fontWeight: 700,
    },
    content: {
      gridColumnEnd: 'span 2',
    },
    control: {
      minWidth: 'min-content',
      alignItems: {
        _: 'flex-start',
        xs: 'center',
      },
      gridColumn: 2,
      gridRow: 1,
    },
    expand: {
      minWidth: 'min-content',
    },
  },
});

const columnJustify = variant({
  prop: 'justify',
  defaultVariant: 'left',
  variants: {
    left: {
      justifyContent: { xs: 'flex-start' },
    },
    right: {
      justifyContent: { xs: 'flex-end' },
    },
  },
});

const columnSizes = variant({
  prop: 'size',
  defaultVariant: 'content',
  base: { minWidth: 0, maxWidth: 1, flexShrink: 1 },
  variants: {
    sm: {
      flexBasis: { xs: '6rem' },
      width: { xs: '6rem' },
    },
    md: {
      flexBasis: { xs: '10rem' },
      width: { xs: '10rem' },
    },
    lg: {
      flexBasis: { xs: '12rem' },
      width: { xs: '12rem' },
    },
    xl: {
      flexBasis: { xs: '20rem' },
      width: { xs: '20rem' },
    },
    content: {
      flexShrink: 0,
    },
  },
});

const columnStates = states({
  fill: { flexGrow: { xs: 1 } },
  sticky: {
    position: 'sticky',
    left: 0,
    zIndex: 1,
    bg: 'inherit',
    '&:not(:first-of-type)': {
      left: { xs: 16 },
      overflow: 'visible',
    },
    '&:not(:first-of-type):before': {
      display: { _: 'none', xs: 'block' },
      content: '""',
      bg: 'inherit',
      left: -16,
      height: 1,
      width: 16,
      position: 'absolute',
    },
  },
  delimiter: {
    '&:after': {
      display: { _: 'none', xs: 'block' },
      content: '""',
      bg: 'background-current',
      right: -4,
      top: 0,
      bottom: -2,
      width: 4,
      position: 'absolute',
    },
  },
  ghost: {
    visibility: 'hidden',
    pointerEvents: 'none',
    opacity: 0,
  },
  columnHeader: {
    fontWeight: 400,
    overflow: 'visible',
  },
  wrap: {
    whiteSpace: 'normal',
  },
});

const columnSpacing = variant({
  prop: 'spacing',
  base: {
    px: { _: 16, xs: 0 },
    '&:first-of-type': {
      pl: 16,
    },
    '&:last-of-type': {
      pr: 16,
    },
  },
  variants: {
    normal: {
      py: { _: 0, xs: 16 },
    },
    condensed: {
      py: { _: 0, xs: 8 },
    },
  },
});

export interface ColProps
  extends StyleProps<typeof columnSizes>,
    StyleProps<typeof columnSpacing>,
    StyleProps<typeof columnType>,
    StyleProps<typeof columnStates>,
    StyleProps<typeof columnJustify>,
    StyleProps<typeof system['layout']> {}

export const ColEl = styled(
  'div',
  styledOptions([
    'fill',
    'ghost',
    'spacing',
    'columnHeader',
    'sticky',
    'size',
    'justify',
    'type',
  ])
)<ColProps>(
  css({
    display: 'inline-flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    position: 'relative',
  }),
  columnSpacing,
  columnSizes,
  columnType,
  columnStates,
  columnJustify,
  system.layout
);
