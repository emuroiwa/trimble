import Vue from 'vue';
import Router from 'vue-router';
import RegistrationForm from './views/account/RegistrationForm.vue';
import LoginForm from './views/account/LoginForm.vue';
import DashboardRoot from './views/dashboard/Root.vue';
import DashboardHome from './views/dashboard/Home.vue';
import store from './store/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'loginForm',
      component: LoginForm,
    },
    {
      path: '/register',
      name: 'registrationForm',
      component: RegistrationForm,
    },
    {
      path: '/login',
      name: 'loginForm',
      component: LoginForm,
    },
    {
      path: '/dashboard',
      component: DashboardRoot,
      children: [
        {
          path: 'home',
          component: DashboardHome,
          // a meta field
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});

router.beforeEach((to: any, from: any, next: any) => {
  if (to.matched.some((record: any) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters['auth/isAuthenticated']) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});


export default router;
