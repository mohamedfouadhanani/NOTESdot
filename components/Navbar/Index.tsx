import Dynamic from 'next/dynamic';
import Container from '../Container';
import Logo from '../Logo';
import Settings from './Settings/Index';

let InstallButton = Dynamic(import('./InstallButton'), {
	ssr: false,
});

function NavBar() {
	return (
		<Container className="px-4 py-4 sm:px-0 sm:w-9/12 md:w-8/12 mx-0 sm:mx-auto">
			<div className="flex justify-between items-center">
				<Logo fontSize={`4xl`} />

				<div className="flex justify-between items-center space-x-2">
					<InstallButton />
					<Settings />
				</div>
			</div>
		</Container>
	);
}

export default NavBar;
