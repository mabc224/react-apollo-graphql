import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Languages from '../Language'
import CountryContinent from '../Continent'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer
  background: transparent
  font-size: 16px
  border-radius: 3px
  color: white
  border: 2px solid white
  width: 100%
  align-items: center
  margin: 0 auto
  transition: 0.5s all ease-out
  &:hover {
    background-color: black
    color: white
  }
`

export default function CountryItems ({ country: { code, name, phone, native, currency, emoji, emojiU, languages, continent } }) {
  return (
    <div className="card card-body mb-3" style={{ width: '50%', margin: 'auto' }}>
      <div className="row">
        <div className="col-md-9">
          <CountryContinent continent={continent} />
          <h4>Name :{name}</h4>
          <p>Code : {code}</p>
          <p>Phone : {phone}</p>
          <p>Native : {native}</p>
          <p>Currency : {currency}</p>
          <p>emoji : {emoji}</p>
          <p>emojiU : {emojiU}</p>
          <Languages languages={languages} />
        </div>
        <div className="col-md-3">
          <Button><Link to={`/countries/${code}`}>Country Detail</Link></Button>
        </div>

      </div>

    </div>
  )
}

CountryItems.propTypes = {
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    native: PropTypes.string,
    phone: PropTypes.string,
    currency: PropTypes.string,
    emoji: PropTypes.string,
    emojiU: PropTypes.string,
    continent: PropTypes.shape({
      name: PropTypes.string
    }),
    languages: PropTypes.array
  })
}
