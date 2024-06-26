import React, { useEffect } from 'react'
import { Grid, SelectChangeEvent } from '@mui/material'
import './Selector.scss'
import { useDispatch, useSelector } from 'react-redux'
import MySelector from '../MySelector/MySelector'
import { ThunkDispatch } from 'redux-thunk'
import {
  getCitiesOfCountry,
  getCountryByValueFromAllCountries,
} from '../../features/utils/utils'

export default function Selector() {
  const dataCountries = useSelector((state) => state.countries)
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const handleChangeCountry = (event: SelectChangeEvent) => {
    dispatch({
      type: 'countries/onChangeCountry',
      payload: getCountryByValueFromAllCountries(
        dataCountries.countries,
        event.target.value
      ),
    })
  }
  const handleChangeCity = (event: SelectChangeEvent) => {
    dispatch({
      type: 'countries/onChangeCity',
      payload: event.target.value,
    })
  }

  useEffect(() => {
    const cities: string[] | undefined = getCitiesOfCountry(
      dataCountries.selectedCountry
    )
    dispatch({
      type: 'countries/onChangeCities',
      payload: cities,
    })
  })
  return (
    <div className="selects-container">
      <Grid container spacing={2} className="select-container">
        <Grid item xs={12} sm={4} md={4}>
          <MySelector
            data={dataCountries.countries}
            handleChange={handleChangeCountry}
            subject="Pays"
            value={dataCountries.selectedCountry.country}
          />
        </Grid>
        <Grid xs={12} sm={4} md={4} item>
          <MySelector
            data={dataCountries.cities}
            handleChange={handleChangeCity}
            subject="Villes"
            value={dataCountries.selectedCity}
          />
        </Grid>
      </Grid>
    </div>
  )
}
