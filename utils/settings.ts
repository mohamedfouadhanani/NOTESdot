export interface ILanguage {
	name: string;
	navbar?: {
		install: string;
		changeLanguage: string;
		switchTheme: string;
	};
	footer?: {
		allRightsReserved: string;
		terms: string;
		privacy: string;
	};
	index?: {
		h1: string;
		h2: string;
		create: string;
		open: string;
	};
	notFound?: {
		h1: string;
		h2: string;
		button: string;
	};
	note?: {
		error: string;
		placeholder: string;
		emptyTitle: string;
		saveLocally: string;
		preview: string;
	};
}

export enum ELanguage {
	ENGLISH = 'ENGLISH',
	FRANCAIS = 'FRANCAIS',
	ESPANOL = 'ESPANOL',
}

export interface ISettings {
	language: ELanguage;
	isDarkTheme: boolean;
}

export const getLocalSettings = (): ISettings => {
	let settingsString: string = localStorage.getItem('NOTES._SETTINGS');
	let settings: ISettings = JSON.parse(settingsString);
	return settings;
};

export const setLocalSettings = (settings: ISettings): void => {
	let settingsString: string = JSON.stringify(settings);
	localStorage.setItem('NOTES._SETTINGS', settingsString);
};
