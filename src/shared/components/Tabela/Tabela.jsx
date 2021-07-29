import React from "react"
import { useTable, useSortBy, useFilters, useGlobalFilter } from "react-table"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import TableContainer from "@material-ui/core/TableContainer"

import FiltroGlobal from "./FiltroGlobal"
import FiltroDeColuna from "./FiltroDeColuna"
import Typography from "@material-ui/core/Typography"

export default function Tabela({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: FiltroDeColuna,
    }),
    []
  )

  const {
    headerGroups,
    rows,
    prepareRow,
    state,
    preFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, defaultColumn, data },
    useFilters,
    useGlobalFilter,
    useSortBy
  )

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <FiltroGlobal
              preFilteredRows={preFilteredRows}
              setGlobalFilter={setGlobalFilter}
              globalFilter={state.globalFilter}
            />
          </TableRow>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <Typography variant="h6">
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDownwardIcon fontSize="small" />
                      ) : (
                        <ArrowUpwardIcon fontSize="small" />
                      )
                    ) : (
                      ""
                    )}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
