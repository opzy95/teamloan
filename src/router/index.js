import { createRouter, createWebHistory } from "vue-router"

// import Home from "../views/Home.vue"
// import About from "../views/About.vue" 
import LoginView from "../views/LoginView.vue"
import LandingView from "../views/LandingView.vue"
import BlogView from "../views/BlogView.vue"
import ContactView from "../views/ContactView.vue"
import AboutView from "../views/AboutView.vue"
import ServiceView from "../views/ServiceView.vue"
import SignupView from "../views/SignupView.vue" 
import PersonalInfo from "../views/UserView.vue"
import DashboardView from "../views/DashboardView.vue"

const routes = [
  {
   
    path: "/",
    name: "Landing",
    component: LandingView

  },

  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
    {
    path: "/blog",
    name: "blog",
    component: BlogView
  },
      {
    path: "/contact",
    name: "contact",
    component: ContactView
  },
   {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/services",
    name: "Service",
    component: ServiceView
  },
    {
    path: "/signup",
    name: "Signup",
    component: SignupView
  },
   {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView
  },

 {

  path: "/userdetails/:id",
  name: "personal",
  component: PersonalInfo

 },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router