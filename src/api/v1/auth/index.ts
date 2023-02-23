import { Router } from 'express';

import { handleSignin, handleSignup } from 'controllers/auth';

/*
 * Auth API Routes
 * */
export const authRoutes = Router()
  .post('/signup', handleSignup)

  .post('/signin', handleSignin)

  .get('/signout', () => console.log('signout'))

  .post('/forgot-password', () => console.log('forgot password'))

  .post('/reset-password', () => console.log('reset password'))

  .post('/change-password', () => console.log('change password'));
