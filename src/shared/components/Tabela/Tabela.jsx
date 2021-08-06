import React from "react"
import {useFilters, useGlobalFilter, useSortBy, useTable} from "react-table"

import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import InputBase from "@material-ui/core/InputBase"
import Typography from "@material-ui/core/Typography"
import SearchIcon from "@material-ui/icons/Search"
import TableContainer from "@material-ui/core/TableContainer"
import NumberFormat from "react-number-format"

import ColunaDeAcoes from "./ColunaDeAcoes"
import tableStyles from "../../../@material/TableStyles";

export default function Tabela({columns, data, colunaDeAcoes, service, caminhoDoObjeto}) {
    const {
        headerGroups,
        rows,
        prepareRow,
        state,
        preFilteredRows,
        setGlobalFilter,
    } = useTable(
        {columns, data},
        useFilters,
        useGlobalFilter,
        useSortBy
    )

    const styles = tableStyles();

    function renderCell(cell) {
        const valor = cell.value
        const tipo = cell.column.type

        if (tipo === "currency") {
            return <NumberFormat
                value={valor}
                displayType={'text'}
                decimalSeparator="."
                thousandSeparator=","
                prefix="R$ "
            />
        }

        return cell.value
    }

    return (
        <TableContainer className={styles.container}>
            <div className={styles.campoPesquisa}>
                <SearchIcon className={styles.searchIcon}/>
                <InputBase
                    data-testid="filtro-global"
                    value={state.globalFilter || ""}
                    onChange={(e) => {
                        setGlobalFilter(e.target.value || undefined)
                    }}
                    placeholder={`${preFilteredRows.length} itens...`}
                    classes={{
                        root: styles.inputRoot,
                        input: styles.inputInput,
                    }}
                    inputProps={{"aria-label": "Pesquisar itens na tabela"}}
                />
            </div>
            <Table data-testid="tabela">
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, i) => (
                                <TableCell
                                    data-testid={"coluna-" + i} {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <Typography variant="h6">
                                        {column.render("header")}
                                    </Typography>
                                </TableCell>
                            ))}
                            {colunaDeAcoes ? <TableCell><Typography variant="h6">Ações</Typography></TableCell> : ""}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <TableRow data-testid={"linha-" + i} {...row.getRowProps()}>
                                {row.cells.map((cell, j) => {
                                    return (
                                        <TableCell data-testid={"linha-" + i + "-coluna-" + j} {...cell.getCellProps()}>
                                            {renderCell(cell)}
                                        </TableCell>
                                    )
                                })}
                                {
                                    colunaDeAcoes ? <ColunaDeAcoes
                                        data-testid={"acoes-" + i}
                                        object_id={row.original.id}
                                        service={service}
                                        caminhoDoObjeto={caminhoDoObjeto}
                                    /> : ""
                                }
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
