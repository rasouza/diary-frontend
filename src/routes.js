/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Login from "views/Login";
import Callback from "views/Login/Callback";

import Story from "views/Story";

const routes = [
  {
    path: "/index",
    name: "Create Story",
    icon: "ni ni-fat-add text-blue",
    component: Story,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    hidden: true,
  },
  {
    path: "/callback",
    name: "Callback",
    icon: "ni ni-key-25 text-info",
    component: Callback,
    layout: "/auth",
    hidden: true,
  },
];

export default routes;
