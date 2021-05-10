import { lazy } from 'react';

export const pages = [
  { path: '/', component: lazy(() => import('./Home/Home.page')) },
  { path: '/about', component: lazy(() => import('./About/About.page')) },
  { path: '/faqs', component: lazy(() => import('./FAQ/FAQ.page')) },
  { path: '/contact-us', component: lazy(() => import('./Contact/Contact.page')) },
  { path: '/membership', component: lazy(() => import('./Membership/Membership.page')) },
  { path: '/terms', component: lazy(() => import('./Terms/Terms.page')) },
  { path: '/privacy', component: lazy(() => import('./Privacy/Privacy.page')) },





]

export const NotFound = lazy(() => import('./404NotFound/404NotFound.page'))