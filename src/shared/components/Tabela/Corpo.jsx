import React from "react"

import TableRow from "@material-ui/core/TableRow"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"

import ColunaDeAcoes from "./ColunaDeAcoes"

function numberToPrice(valor) {
    const convertedValue = Number(valor);
  
    if (isNaN(convertedValue)) return valor;
  
    return convertedValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

export default function Corpo({rows, prepareRow, colunaDeAcoes}) {

    function renderCell(cell) {
        const valor = cell.render("Cell").props.value
        const tipo = cell.render("Cell").props.column.type

        if (tipo === "currency") return numberToPrice(valor)

        return valor
    }

    return (
        <TableBody>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                        {renderCell(cell)}
                    </TableCell>
                  )
                })}
                {colunaDeAcoes ? <ColunaDeAcoes/> : ""}
              </TableRow>
            )
          })}
        </TableBody>
    )
}