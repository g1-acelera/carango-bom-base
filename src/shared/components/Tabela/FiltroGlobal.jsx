import React from "react"

import InputBase from "@material-ui/core/InputBase"
import SearchIcon from "@material-ui/icons/Search"
import filtroGlobalStyles from "../../../@material/FiltroGlobalStyles";

export default function FiltroGlobal({preFilteredRows, globalFilter, setGlobalFilter}) {
    const classes = filtroGlobalStyles()
    const count = preFilteredRows.length

    return (
        <>
            <SearchIcon/>
            <InputBase
                value={globalFilter || ""}
                onChange={(e) => {
                    setGlobalFilter(e.target.value || undefined)
                }}
                placeholder={`${count} records...`}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{"aria-label": "search"}}
            />
        </>
    )
}
