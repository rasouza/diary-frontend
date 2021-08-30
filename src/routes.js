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
import { Timeline } from 'pages/Timeline'
import { Tweets } from 'pages/Tweets'
import { Auth } from 'pages/Auth'
import { Story } from 'pages/Story'

const routes = [
  {
    path: '/',
    name: 'Auth Page',
    short: 'Auth',
    mini: 'AU',
    component: Auth,
    layout: '/auth'
  },
  {
    path: '/story',
    name: 'New story',
    short: 'Story',
    icon: 'now-ui-icons ui-1_simple-add',
    component: Story,
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
    name: 'Timeline Page',
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
