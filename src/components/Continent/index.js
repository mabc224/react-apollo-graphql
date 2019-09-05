import React from 'react'
import { PropTypes } from 'prop-types'
import CountryContinent from './CountryContinent'
export default function Continent ({ continent: { name } }) {
  return (
    <div>
      <CountryContinent name={name}/>
    </div>
  )
}

Continent.propTypes = {
  continent: PropTypes.shape({
    name: PropTypes.string
  })
}
