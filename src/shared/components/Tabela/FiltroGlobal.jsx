import React from "react"

import InputBase from "@material-ui/core/InputBase"
import { makeStyles } from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
}))

export default function FiltroGlobal({
  preFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const classes = useStyles()
  const count = preFilteredRows.length

  return (
    <>
      <SearchIcon />
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
        inputProps={{ "aria-label": "search" }}
      />
    </>
  )
}
