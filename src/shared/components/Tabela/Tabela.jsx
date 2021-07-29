import React from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";

import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import FiltroGlobal from "./FiltroGlobal";
import FiltroDeColuna from "./FiltroDeColuna";
import Typography from "@material-ui/core/Typography";

export default function Tabela({ columns, data, titulo }) {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: FiltroDeColuna,
    }),
    []
  );

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preFilteredRows,
    setGlobalFilter,
  } = useTable({ columns, defaultColumn, data }, useFilters, useGlobalFilter);

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography variant="h5">{titulo}</Typography>
          </TableCell>
          <TableCell>
            <FiltroGlobal
              preFilteredRows={preFilteredRows}
              setGlobalFilter={setGlobalFilter}
              globalFilter={state.globalFilter}
            />
          </TableCell>
        </TableRow>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>
                <Typography variant="h6">{column.render("Header")}</Typography>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
}
