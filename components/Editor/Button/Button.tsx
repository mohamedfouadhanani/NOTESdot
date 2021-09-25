import React from 'react';
import { useSettings } from '../../../contexts/Settings';

function Button({ isActive, icon, ...rest }) {
	let { settings } = useSettings();
	let { isDarkTheme } = settings;

	return (
		<button
			className={`${
				isDarkTheme
					? isActive
						? 'bg-gray-800 text-white'
						: 'hover:bg-gray-800'
					: isActive
					? 'bg-gray-900 text-white'
					: 'hover:bg-gray-900 hover:text-white'
			} ${
				isDarkTheme
					? 'active:bg-gray-900'
					: 'active:bg-gray-700 active:text-white'
			} rounded p-1 transition-all`}
			{...rest}
		>
			{icon}
		</button>
	);
}

export default Button;
