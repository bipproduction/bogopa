import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import React, {useState} from 'react';
import MenuAuth from './modules/_global/components/menu_auth';
import {SplashScreen} from './modules/_global';

function App() {
  const [isLoading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms: number | undefined) =>
      new Promise(r => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
      setUserToken(token);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getUserToken();
  }, []);
  return (
    <GluestackUIProvider config={config}>
      {isLoading ? (
        <SplashScreen />
      ) : userToken == null ? (
        <MenuAuth />
      ) : (
        <MenuAuth />
      )}
    </GluestackUIProvider>
  );
}

export default App;
