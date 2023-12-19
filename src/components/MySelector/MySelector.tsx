import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Country } from '../../features/reducers/countriesSlice'
import MySelectorProps from './MySelectorProps'
import './MySelector.scss'

export default function MySelector({
  handleChange,
  subject,
  data,
  value,
}: MySelectorProps) {
  return (
    <div className="select-container">
      <FormControl className="select-country-form">
        <InputLabel id="demo-simple-select-label">{subject}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {data &&
            data.map((ele: Country | string, index: number) => {
              return (
                <MenuItem
                  key={index}
                  value={
                    typeof ele === 'object' && Object.keys(ele).length !== 0
                      ? ele.country
                      : ele
                  }
                >
                  {typeof ele === 'object' && Object.keys(ele).length !== 0
                    ? ele.country
                    : ele}
                </MenuItem>
              )
            })}
        </Select>
      </FormControl>
    </div>
  )
}
