/*!

=========================================================
* Now UI Dashboard PRO React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// core components
import AuthNavbar from 'components/Navbars/AuthNavbar'
import Footer from 'components/Footer/Footer'

import routes from 'routes.js'

function Auth(props) {
  const [filterColor] = React.useState('yellow')
  const getRoutes = (routes) =>
    routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views)
      }
      if (prop.layout === '/auth') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      }
      return null
    })

  return (
    <>
      <AuthNavbar {...props} />
      <div className="wrapper wrapper-full-page">
        <div className="full-page section-image" filter-color={filterColor}>
          <Switch>
            {getRoutes(routes)}
            <Redirect from="/auth" to="/auth/login-page" />
          </Switch>
          <Footer fluid />
        </div>
      </div>
    </>
  )
}

export default Auth
