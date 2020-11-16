import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './App'
// import Page404 from './pages/Page404'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/page404' name='Page 404' component={Page404} /> */}
        <Route path='/' name='App' component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes