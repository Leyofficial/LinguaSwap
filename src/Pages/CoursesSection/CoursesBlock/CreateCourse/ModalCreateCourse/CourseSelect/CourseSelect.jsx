import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const CourseSelect = (props) => {
  const {items,title,callback,value} = props

  const handleChange = (event) => {
    callback(event.target.value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{title}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={handleChange}
          >
            {items.map((item) =>  <MenuItem value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default CourseSelect;