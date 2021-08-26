import App from 'next/app';
import React from 'react';
import { wrapper } from '../store/store';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from '../components/Layout';
import '@fontsource/roboto';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const store = useStore((state) => state);
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
