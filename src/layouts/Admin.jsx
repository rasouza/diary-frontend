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
import { Switch, Redirect, useLocation, Route } from 'react-router-dom'
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar'
// react plugin for creating notifications
import NotificationAlert from 'react-notification-alert'

// core components
import AdminNavbar from 'components/Navbars/AdminNavbar'
import Footer from 'components/Footer/Footer'
import Sidebar from 'components/Sidebar/Sidebar'
import { withAuth } from 'components/withAuth'

import routes from 'routes'

let ps

function Admin(props) {
  const location = useLocation()
  const notificationAlert = React.useRef()
  const mainPanel = React.useRef()

  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on'
      document.documentElement.classList.remove('perfect-scrollbar-off')
      ps = new PerfectScrollbar(mainPanel.current)
    }
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy()
        document.documentElement.className += ' perfect-scrollbar-off'
        document.documentElement.classList.remove('perfect-scrollbar-on')
      }
    }
  })
  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainPanel.current.scrollTop = 0
  }, [location])

  const getRoutes = (routes) =>
    routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views)
      }
      if (prop.layout === '/admin') {
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
  const getActiveRoute = (routes) => {
    const activeRoute = 'Default Brand Text'
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        const collapseActiveRoute = getActiveRoute(routes[i].views)
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute
        }
      } else if (
        window.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name
      }
    }
    return activeRoute
  }
  return (
    <div className="wrapper">
      <NotificationAlert ref={notificationAlert} />
      <Sidebar
        {...props}
        routes={routes}
        minimizeSidebar={() => document.body.classList.toggle('sidebar-mini')}
        backgroundColor="yellow"
      />
      <div className="main-panel" ref={mainPanel}>
        <AdminNavbar {...props} brandText={getActiveRoute(routes)} />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="/admin" to="/admin/story" />
        </Switch>
        {
          // we don't want the Footer to be rendered on full screen maps page
          window.location.href.indexOf('full-screen-maps') !== -1 ? null : (
            <Footer fluid />
          )
        }
      </div>
    </div>
  )
}

export default withAuth(Admin)
