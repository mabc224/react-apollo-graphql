import React from 'react'
import { PropTypes } from 'prop-types'

export default function CountryContinent ({ name }) {
  return (
    <div>
      <h4>Continent :{name}</h4>
    </div>
  )
}
CountryContinent.propTypes = {
  name: PropTypes.string
}
