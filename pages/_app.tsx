import type {AppProps} from 'next/app'
import {CssBaseline} from "@mui/material";

export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <CssBaseline/>
            <Component {...pageProps} />
        </div>
    )
}
