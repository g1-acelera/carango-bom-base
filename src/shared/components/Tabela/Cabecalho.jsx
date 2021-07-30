import React from 'react'

import TableRow from "@material-ui/core/TableRow"
import TableHead from "@material-ui/core/TableHead"
import TableCell from "@material-ui/core/TableCell"
import Typography from "@material-ui/core/Typography"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"

import FiltroGlobal from "./FiltroGlobal"

export default function Cabecalho({ 
  headerGroups,
  preFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {

  return (
    <TableHead>
      <TableRow>
        <FiltroGlobal
          preFilteredRows={preFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={globalFilter}
        />
      </TableRow>
      {headerGroups.map((headerGroup) => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <TableCell
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              <Typography variant="h6">
                {column.render("header")}
                {column.isSorted ? (column.isSortedDesc ? <ArrowDownwardIcon fontSize="small" /> : <ArrowUpwardIcon fontSize="small" />) : ""}
              </Typography>
            </TableCell>
          ))}
          <TableCell>
            <Typography variant="h6">Ações</Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableHead>
  )
}
