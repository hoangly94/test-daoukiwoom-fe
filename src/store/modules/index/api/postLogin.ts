
import Cookies from 'universal-cookie';
import Router from 'next/router'
import { parseExpiredTime } from './funcs';
export default {
  query: (credentials) => ({
    url: `/auth/login`,
    method: 'POST',
    body: credentials,
  }),
  async onQueryStarted(
    arg,
    {
      queryFulfilled,
    }
  ) {
    queryFulfilled.then((r) => {
      const cookies = new Cookies();
      const { access_token, expired } = r.data;
      process.env.ACCESS_TOKEN_COOKIE
        && cookies.set(
          process.env.ACCESS_TOKEN_COOKIE,
          access_token,
          {
            expires: new Date(Date.now() + parseExpiredTime(expired))
          }
        )
      Router.push('/')
    });
  },
}