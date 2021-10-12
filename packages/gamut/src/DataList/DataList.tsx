import React, { ReactElement } from 'react';

import { DataGrid, DataGridProps } from './DataGrid';
import { ColumnConfig, IdentifiableKeys } from './types';

export interface DataList {
  <Row, IdKey extends IdentifiableKeys<Row>, Cols extends ColumnConfig<Row>[]>(
    props: Omit<DataGridProps<Row, IdKey, Cols>, 'variant'> & {
      variant?: 'slat' | 'bar';
    }
  ): ReactElement<any, any>;
}

export const DataList: DataList = ({ variant = 'slat', ...rest }) => {
  return (
    <DataGrid variant={variant} {...rest} shadow={false} scrollable={false} />
  );
};