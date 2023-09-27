// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


// import "../styles/globals.css";
// import { ThemeProvider } from "@mui/material";
// import { theme } from "../utils/theme";

// function MyApp({ Component, pageProps }) {
//  return (
//    <ThemeProvider theme={theme}>
//      <Component {...pageProps} />
//    </ThemeProvider>
//  );
// }

// export default MyApp;

import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function App({
 Component,
 emotionCache = clientSideEmotionCache,
 pageProps,
}) {
 return (
   <CacheProvider value={emotionCache}>
     <ThemeProvider theme={theme}>
       <Component {...pageProps} />
     </ThemeProvider>
   </CacheProvider>
 );
}

export default App;