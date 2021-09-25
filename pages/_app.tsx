import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import * as gtag from '../utils/gtag';
import ContextsProvider from '../contexts/Index';

// STYLES
import '../styles/global.css';
import '../styles/font.css';
import '../styles/tiptap.css';

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = url => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
			</Head>
			<ContextsProvider>
				<Component {...pageProps} />
			</ContextsProvider>
		</>
	);
};

export default App;
