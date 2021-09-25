import Head from 'next/head';

// CONTEXTS
import { useSettings } from '../contexts/Settings';

// COMPONENTS
import Footer from './Footer';
import NavBar from './Navbar/Index';

function Layout({ children, full }: any) {
	let { settings }: any = useSettings();
	let { isDarkTheme } = settings;

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="author" content="@its_fouad_hanani" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="shortcut icon"
					href="/icons/NOTES. NO BORDER.svg"
					type="image/svg+xml"
				/>
				<link
					rel="apple-touch-icon"
					href="/icons/NOTES. NO BORDER.svg"
					type="image/svg+xml"
				/>
			</Head>
			<div
				className={`${
					isDarkTheme ? 'text-gray-50 bg-gray-900' : 'text-gray-900 bg-white'
				} min-h-screen ${
					full ? 'flex flex-col justify-between' : ''
				} selection:bg-violet-600 selection:text-gray-50`}
			>
				{full && <NavBar />}
				{children}
				{full && <Footer />}
			</div>
		</>
	);
}

export default Layout;
