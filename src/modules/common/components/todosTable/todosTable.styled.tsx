import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';
import TableRow, { TableRowProps } from '@mui/material/TableRow';
import Table, { TableProps } from '@mui/material/Table';

export const StyledTable = styled((props: TableProps) => <Table {...props} />)(({ theme }) => ({
  borderTop: '1px solid',
  borderBottom: '1px solid',
  borderColor: theme.palette.black.main
}));

export const StyledTableHead = styled((props: TableHeadProps) => <TableHead {...props} />)(
  ({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark
  })
);

export const StyledTableRow = styled((props: TableRowProps) => <TableRow {...props} />)(
  ({ theme }) => ({
    '&:nth-of-type(2n+1)': {
      backgroundColor: theme.palette.secondary.light
    }
  })
);

export const StyledTableCell = styled((props: TableCellProps) => <TableCell {...props} />)(
  ({ theme }) => ({
    flexShrink: 0,
    borderRight: '1px solid',
    borderLeft: '1px solid',
    borderColor: theme.palette.black.main,
    borderBottom: 'none'
  })
);
