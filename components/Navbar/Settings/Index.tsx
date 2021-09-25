import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useSettings } from '../../../contexts/Settings';
import { setLocalSettings } from '../../../utils/settings';

// CONTEXTS

// LOCAL COMPONENTS
import CustomSwitch from '../../CustomSwitch';
import LanguageListBox from './LanguageListBox';
import MenuItem from './MenuItem';
import SettingsButton from './SettingsButton';

export default function Settings() {
	let { settings, setSettings }: any = useSettings();
	let { isDarkTheme } = settings;

	return (
		<Menu as="div" className="relative inline-block text-left">
			<Menu.Button className="flex items-center">
				<SettingsButton />
			</Menu.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items
					className={`${
						isDarkTheme
							? 'bg-gray-900 ring-gray-700 text-gray-50'
							: 'bg-white ring-gray-200'
					} absolute right-0 w-52 mt-2 origin-top-right rounded-md shadow-lg ring-1 outline-none p-4 space-y-4 !z-[1000]`}
				>
					<MenuItem title={settings.language.navbar.changeLanguage}>
						<LanguageListBox />
					</MenuItem>

					<MenuItem title={settings.language.navbar.switchTheme}>
						<CustomSwitch
							enabled={isDarkTheme}
							setEnabled={(value: any) => {
								setSettings({ ...settings, isDarkTheme: value });
								setLocalSettings({ ...settings, isDarkTheme: value });
							}}
						/>
					</MenuItem>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
