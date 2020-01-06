import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/home.vue')
const More = () => import('../views/more/more.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')
const Login = () => import('../views/login/login.vue')

Vue.use(Router)

const routes = [
    {
      path: '',
      redirect:'/home'
    },
	{
	  path: '/home',
	  component: Home
	},
	{
	  path: '/more',
	  component: More
	},
	{
	  path: '/cart',
	  component: Cart
	},
	{
	  path: '/profile',
	  component: Profile
	},
	{
		path:'/login',
		component:Login
	}
  ]
  const router = new Router({
  	routes,
  	mode:'history'
  })

export default router