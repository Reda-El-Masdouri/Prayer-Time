import React from 'react'
import TowTitlesProps from './TowTitlesProps'

export default function TowTitles({ titleH2, titleH1 }: TowTitlesProps) {
  return (
    <div>
      <h2>{titleH2}</h2>
      <h1>{titleH1}</h1>
    </div>
  )
}
