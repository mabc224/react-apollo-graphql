import React from 'react'
import { PropTypes } from 'prop-types'
import CountryLanguage from './CountryLanguage'
export default function Country ({ languages }) {
  return (
    <div>
      <h5>Languages :</h5>
      {
        languages.map((item, index) => (
          <CountryLanguage key={index} language={item}/>
        ))
      }
    </div>
  )
}

Country.propTypes = {
  languages: PropTypes.array
}
