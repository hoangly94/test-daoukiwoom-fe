import Router from 'next/router'

export default {
  query: (data) => ({
    url: `/auth/register`,
    method: 'POST',
    body: data,
  }),
  async onQueryStarted(
    arg,
    {
      queryFulfilled,
    }
  ) {
    queryFulfilled.then((r) => {
      Router.push('/login')
    });
  },
}