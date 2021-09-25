import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { getLocalSettings, ISettings } from '../utils/settings';
import { LANGUAGE } from '../constants';

export const SettingsContext = createContext(null);

export function useSettings(): {
	settings: ISettings;
	setSettings: Dispatch<SetStateAction<ISettings>>;
} {
	return useContext(SettingsContext);
}

function SettingsProvider({ children }) {
	let localSettings: ISettings = getLocalSettings();

	let OSTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	let defaultSettings: ISettings = {
		language: LANGUAGE.english,
		isDarkTheme: OSTheme,
	};

	let [settings, setSettings] = useState(
		localSettings && Object.keys(localSettings).length !== 0
			? localSettings
			: defaultSettings
	);

	return (
		<SettingsContext.Provider value={{ settings, setSettings }}>
			{children}
		</SettingsContext.Provider>
	);
}

export default SettingsProvider;
