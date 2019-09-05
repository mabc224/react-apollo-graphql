import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
export default function CountryItem ({ country: { name, phone, currency } }) {
  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Link to="/" className="btn btn-secondary">
                Back
      </Link>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          Name : {name}
        </li>
        <li className="list-group-item">
          Area Code (Phone) : {phone}
        </li>
        <li className="list-group-item">
          Currency : {currency}
        </li>
        <hr />
      </ul>

    </div>
  )
}

CountryItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    currency: PropTypes.string
  })
}
