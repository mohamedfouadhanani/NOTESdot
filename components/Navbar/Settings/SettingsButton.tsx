import React from 'react';
import { CogIcon } from '@heroicons/react/solid';

import { useSettings } from '../../../contexts/Settings';

function SettingsButton() {
	let { settings }: any = useSettings();
	let { isDarkTheme } = settings;
	return (
		<div
			className={`${
				isDarkTheme
					? 'text-gray-600 hover:text-gray-500'
					: 'text-gray-300 hover:text-gray-200'
			} p-1 rounded-full transition-all`}
		>
			<CogIcon height={30} />
		</div>
	);
}

export default SettingsButton;
