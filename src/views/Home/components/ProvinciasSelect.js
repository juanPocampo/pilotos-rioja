import { MenuItem, Select } from "@material-ui/core";
import React from "react";
import apiCall from "../../../api";
import useStyles from "../style";

export default function ProvinciasSelect({ provincias, onSelectProv }) {
  const classes = useStyles();
  const handleProvChange = ({ target }) => {
    const prov = target.value;
    onSelectProv(prov);
  };

  return (
    <Select
      label="Provincia"
      onChange={(evt) => handleProvChange(evt)}
      className={classes.selectForm}
      defaultValue={0}
    >
      <MenuItem value={0}>Sin selección</MenuItem>
      {provincias?.map((value) => {
        return (
          <MenuItem value={value.cpr_id} key={value.cpr_id}>
            {" "}
            {value.cpr_nombre}{" "}
          </MenuItem>
        );
      })}
    </Select>
  );
}
