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
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GrowthBook, GrowthBookProvider } from '@growthbook/growthbook-react'
import { ReactQueryDevtools } from 'react-query/devtools'

import 'bootstrap/dist/css/bootstrap.css'
// eslint-disable-next-line import/no-unresolved
import 'assets/scss/now-ui-dashboard.scss?v=1.5.0'
import 'assets/css/demo.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import AdminLayout from 'layouts/Admin'
import AuthLayout from 'layouts/Auth'
import { LoadingProvider } from 'lib/LoadingProvider'
import { NotifyProvider } from 'lib/NotifyProvider'
import { AuthProvider } from 'lib/AuthProvider'
import { loadFeatures } from 'api/growthbook'
import { createClient } from '@supabase/supabase-js'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20 // 20s
    }
  }
})

const growthbook = new GrowthBook({
  trackingCallback: (experiment, result) => {
    console.log({
      experimentId: experiment.key,
      variationId: result.variationId
    })
  }
})

const supabaseClient = createClient(window.SUPABASE_URL, window.SUPABASE_KEY)

function App() {
  useEffect(async () => {
    await loadFeatures(growthbook)
  }, [])

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <QueryClientProvider client={queryClient}>
        <LoadingProvider>
          <NotifyProvider>
            <AuthProvider client={supabaseClient}>
              <BrowserRouter>
                <Switch>
                  <Route
                    path="/admin"
                    render={(props) => <AdminLayout {...props} />}
                  />
                  <Route
                    path="/auth"
                    render={(props) => <AuthLayout {...props} />}
                  />
                  <Redirect to="/admin/story" />
                </Switch>
              </BrowserRouter>
            </AuthProvider>
          </NotifyProvider>
        </LoadingProvider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </GrowthBookProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
