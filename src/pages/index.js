import { lazy } from 'react';

export const pages = [
  { path: '/', component: lazy(() => import('./Home/Home.page')) },
  { path: '/about', component: lazy(() => import('./About/About.page')) },
  { path: '/contact-us', component: lazy(() => import('./Contact/Contact.page')) },
  { path: '/membership', component: lazy(() => import('./Membership/Membership.page')) },

]

export const NotFound = lazy(() => import('./404NotFound/404NotFound.page'))