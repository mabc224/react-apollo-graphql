import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './container/App'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes/>
      </Router>
    </ApolloProvider>
  )
}

export default App
