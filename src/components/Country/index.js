import React, { Component, Fragment } from 'react'
import CountryItem from './CountryItems'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_ALL_COUNTRIES_QUERY = gql`
    query CountriesQuery {
        countries {
            code
            name
            phone
            native
            currency
            emoji
            emojiU
            continent{
                name
            }
            languages{
                code
                name
                native
            }
        }
    }
`

export class Countries extends Component {
  render () {
    return (
      <Fragment>
        <Query query={GET_ALL_COUNTRIES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4 style={{ width: '50%', margin: 'auto' }}>Loading...</h4>
              if (error) console.log(error)
              return <Fragment>
                {
                  data.countries.map((item, index) => (
                    <CountryItem key={index} country={item} />
                  ))
                }
              </Fragment>
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Countries
