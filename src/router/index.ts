import { createBrowserRouter } from 'react-router'

import Home from '../pages/Home'

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: Home,
    },
  ],
  {
    basename: '/hotpot/',
  },
)

export default router
