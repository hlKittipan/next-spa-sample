import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '@/utility/createEmotionCache';
import darkThemeOptions from '@/styles/theme/darkThemeOptions';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const darkTheme = createTheme(darkThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  );
};

export default MyApp;
