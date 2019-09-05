import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BaseComponent from '../../components'
import { Countries, CountryDetail, Header } from '../App/Country'
export default function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={BaseComponent}></Route>
        <Route exact path="/countries" component={Countries}></Route>
        <Route exact path="/countries/:code" component={CountryDetail}></Route>
      </Switch>
    </div>
  )
}
