import React from "react"
import { useTable, useSortBy, useFilters, useGlobalFilter } from "react-table"

import Table from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer"
import { makeStyles } from "@material-ui/core/styles"

import Cabecalho from "./Cabecalho"
import Corpo from "./Corpo"

const tableStyles = makeStyles((theme) => ({
  container: {
    width: "calc(100vw - 240px)"
  }
}))

export default function Tabela({ columns, data, colunaDeAcoes}) {
  const {
    headerGroups,
    rows,
    prepareRow,
    state,
    preFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy
  )

  const styles = tableStyles()

  return (
    <TableContainer className={styles.container}>
      <Table>
        <Cabecalho
          headerGroups={headerGroups}
          preFilteredRows={preFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={state.globalFilter}
        />
        <Corpo
          rows={rows}
          prepareRow={prepareRow}
          colunaDeAcoes={colunaDeAcoes}
        />
      </Table>
    </TableContainer>
  )
}
