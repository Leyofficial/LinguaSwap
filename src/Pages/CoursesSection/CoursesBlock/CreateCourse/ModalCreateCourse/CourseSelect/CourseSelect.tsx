import React from 'react';
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

const styleSelector = {
  color:'rgba(9, 89, 134, 0.75)',
  border:"none",
  outline:"none",
  background:"white"
}

interface ICourseSelectProps {
  items:string[],
  title:string,
  callback:(arg:string) => void,
  value:string
}
const CourseSelect = (props:ICourseSelectProps) => {
  const {items,title,callback,value} = props

  const handleChange = (event: SelectChangeEvent<string>) => {
    callback(event.target.value as string);
  };


  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{title}</InputLabel>
          <Select
            style={styleSelector}
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