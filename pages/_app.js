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
import '../public/fonts/fonts.css';
import Sidebar from '../components/Sidebar.jsx'

const clientSideEmotionCache = createEmotionCache();

function App({
 Component,
 emotionCache = clientSideEmotionCache,
 pageProps,
}) {
 return (
   <CacheProvider value={emotionCache}>
     <ThemeProvider theme={theme}>
      <Sidebar>
       <Component {...pageProps} />
       </Sidebar>
     </ThemeProvider>
   </CacheProvider>
 );
}

export default App;