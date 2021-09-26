import { useRouter } from 'next/router';
import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import Layout from '../components/Layout';
import { LANGUAGE } from '../constants';
import { useSettings } from '../contexts/Settings';

function NotFound() {
	let router = useRouter();
	let { settings } = useSettings();

	return (
		<>
			<Layout full={false}>
				<Container className="h-screen mx-auto flex items-center justify-center w-3/4">
					<div className="flex flex-col items-center space-y-4 text-center">
						<span className="font-bold text-4xl">
							{LANGUAGE[settings.language].notFound.h1}
						</span>
						<span className="font-light">
							{LANGUAGE[settings.language].notFound.h2}
						</span>
						<Button
							onClick={() => router.push('/')}
							className={`text-gray-50 active:text-gray-200 bg-violet-600 hover:bg-violet-500 active:bg-violet-700`}
						>
							{LANGUAGE[settings.language].notFound.button}
						</Button>
					</div>
				</Container>
			</Layout>
		</>
	);
}

export default NotFound;
