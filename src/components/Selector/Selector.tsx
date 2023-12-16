import React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'
import './Selector.scss'

export default function Selector() {
  const [city, setCity] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value)
  }
  return (
    <div className="select-city">
      <FormControl className="select-city-form">
        <InputLabel id="demo-simple-select-label">Ville</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
