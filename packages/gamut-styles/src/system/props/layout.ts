import { DisplayTypes } from '../../variables/display';
import { parseSize } from '../transforms';

export const layout = {
  display: {
    propName: 'display',
    scale: [] as DisplayTypes[],
  },
  overflow: {
    propName: ['overflow', 'overflowX', 'overflowY'],
    scale: [] as ('visible' | 'hidden' | 'scroll')[],
  },
  dimensions: {
    propName: [
      'width',
      'minWidth',
      'maxWidth',
      'height',
      'minHeight',
      'maxHeight',
    ],
    scale: [] as (number | string)[],
    computeValue: (value: unknown) => parseSize(value as string | number),
  },
} as const;
