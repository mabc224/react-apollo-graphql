/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { PropTypes } from 'prop-types'
import SingleCountryDetail from './CountryItem'
import { Query } from 'react-apollo'

const COUNTRY_QUERY = gql`
  query CountryQuery($code: String!) {
    country(code: $code) {
        code
        name
        phone
        currency
    }
  }
`

export class CountryDetail extends Component {
  render () {
    const { code } = this.props.match.params
    console.log(code)
    return (
      <Fragment>
        <Query query={COUNTRY_QUERY} variables={{ code }}>
          {({ loading, error, data }) => {
            if (loading) return <h4 style={{ width: '50%', margin: 'auto' }}>Loading...</h4>
            if (error) console.log(error)
            // console.log(data.country)
            return <Fragment>
              <SingleCountryDetail country={data.country} />
            </Fragment>
          }}
        </Query>
      </Fragment>
    )
  }
}

export default CountryDetail

CountryDetail.propTypes = {
  name: PropTypes.string
}
