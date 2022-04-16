import type { AppProps } from 'next/app'
// import 'sezy-design/css/variables.css';
// import 'sezy-design/css/default.css';
import '~css/default';
import '~css/fonts';
import '~css/variables';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '~store';
import AuthGuard from '~components/AuthGuard';

import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthGuard>
        <Component {...pageProps} />
      </AuthGuard>
    </Provider>
  )
}

export default MyApp
