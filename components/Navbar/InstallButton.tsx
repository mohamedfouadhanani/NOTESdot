import { PlusCircleIcon } from '@heroicons/react/solid';
import { LANGUAGE } from '../../constants';
import { useSettings } from '../../contexts/Settings';

function InstallButton() {
	let { settings }: any = useSettings();
	return (
		<button
			onClick={() => alert('DOES NOTHING 😁...FOR NOW')}
			className="flex items-center bg-violet-600 hover:bg-violet-500 text-white text-sm rounded-full py-1 pr-3 pl-1 space-x-1 transition-all"
		>
			<PlusCircleIcon height={30} />
			<span className="Montserrat-Regular">
				{LANGUAGE[settings.language].navbar.install}
			</span>
		</button>
	);
}

export default InstallButton;
