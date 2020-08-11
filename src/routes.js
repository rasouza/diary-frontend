/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "pages/index.js";
import Story from "pages/Story/Story";
import Login from "pages/Login/Login";
import Callback from "pages/Login/Callback";

var routes = [
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
