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
import { UserProfile } from 'pages/UserProfile'
import { Tweets } from 'pages/Tweets'
import { Login } from 'pages/Login'
import { NewStory, Timeline } from 'pages/Story'

const routes = [
  {
    path: '/',
    name: 'Login Page',
    short: 'Login',
    mini: 'AU',
    component: Login,
    layout: '/auth'
  },
  {
    path: '/story',
    name: 'New Story',
    short: 'Story',
    icon: 'now-ui-icons ui-1_simple-add',
    component: NewStory,
    layout: '/admin'
  },
  {
    path: '/tweets',
    name: 'Tweets',
    icon: 'fab fa-twitter',
    component: Tweets,
    layout: '/admin',
    hidden: true
  },
  {
    path: '/timeline',
    name: 'My Timeline',
    icon: 'fas fa-stream',
    component: Timeline,
    layout: '/admin'
  },
  {
    path: '/user/profile',
    name: 'User Profile',
    icon: 'fas fa-user',
    component: UserProfile,
    layout: '/admin',
    hidden: true
  }
]

export default routes
