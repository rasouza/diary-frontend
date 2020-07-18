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
import Profile from "pages/Profile/Profile";
import Icons from "pages/examples/Icons";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/story",
    name: "Create Story",
    icon: "ni ni-fat-add text-blue",
    component: Story,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Profile",
    icon: "ni ni-circle-08 text-blue",
    component: Profile,
    layout: "/admin",
    hidden: true,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-circle-08 text-blue",
    component: Icons,
    layout: "/admin",
    hidden: true,
  },
];
export default routes;
