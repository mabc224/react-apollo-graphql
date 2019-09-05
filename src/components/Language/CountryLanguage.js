import React from 'react'
import { PropTypes } from 'prop-types'
export default function CountryLanguages ({ language: { code, name, native } }) {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Language Code : {code}
        </li>
        <li className="list-group-item">
          Language Name : {name}
        </li>
        <li className="list-group-item">
          Native Language : {native}
        </li>
        <hr />
      </ul>
    </div>
  )
}

CountryLanguages.propTypes = {
  language: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    native: PropTypes.string
  })
}
