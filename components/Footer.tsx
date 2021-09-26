import React from 'react';
import Link from 'next/link';

// CONTEXTS
import { useSettings } from '../contexts/Settings';

// COMPONENTS
import Container from './Container';
import CustomLink from './Link';
import { LANGUAGE } from '../constants';

function Footer() {
	let year = new Date().getFullYear();
	let { settings }: any = useSettings();

	return (
		<div className="px-4 py-4 space-y-2">
			<Container className="md:mx-auto md:px-0 md:w-9/12 lg:w-8/12 text-center text-sm space-y-1 lg:text-left lg:space-y-0 lg:flex lg:justify-between lg:items-center">
				<div className="lg:flex-1">
					<span className="font-bold">
						&copy; {year} Mohamed Fouad HANANI.{' '}
					</span>
					<span>{LANGUAGE[settings.language].footer.allRightsReserved}</span>
				</div>
				<div className="flex flex-col space-y-1 md:space-x-2 md:space-y-0 md:flex-row md:justify-center">
					<CustomLink
						target="_blank"
						className=""
						href="/terms-and-conditions"
						value={LANGUAGE[settings.language].footer.terms}
					/>
					<CustomLink
						target="_blank"
						className=""
						href="/privacy-policy"
						value={LANGUAGE[settings.language].footer.privacy}
					/>
				</div>
			</Container>
			<div className="text-center text-xs">
				<span>
					made with 💘 by{' '}
					<Link href="https://www.instagram.com/its_fouad_hanani">
						<a
							target="_blank"
							className="cursor-pointer font-bold text-blue-500 hover:underline"
						>
							Mohamed Fouad HANANI
						</a>
					</Link>
				</span>
			</div>
		</div>
	);
}

export default Footer;
