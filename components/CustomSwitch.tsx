import { Switch } from '@headlessui/react';
import { useSettings } from '../contexts/Settings';

function CustomSwitch({ enabled, setEnabled }: any) {
	let { settings }: any = useSettings();
	let { isDarkTheme } = settings;

	return (
		<Switch
			as="button"
			checked={enabled}
			onChange={value => setEnabled(value)}
			className={`${
				isDarkTheme
					? enabled
						? 'bg-gray-700'
						: 'bg-gray-200'
					: enabled
					? 'bg-gray-900'
					: 'bg-gray-200'
			} relative inline-flex flex-shrink-0 h-6 w-12 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:shadow-outline`}
		>
			{({ checked }) => (
				<span
					className={`${
						checked ? 'translate-x-6' : 'translate-x-0'
					} inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
				/>
			)}
		</Switch>
	);
}

export default CustomSwitch;
