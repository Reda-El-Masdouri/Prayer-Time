import React from 'react'
import TowTitlesProps from './TowTitlesProps'
import './TowTitles.scss'

export default function TowTitles({ titleH2, titleH1 }: TowTitlesProps) {
  return (
    <div className="tow-titles">
      <h2>{titleH2}</h2>
      <h1>{titleH1}</h1>
    </div>
  )
}
