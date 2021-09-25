import React from 'react';
import dynamic from 'next/dynamic';

let SettingsProvider = dynamic(() => import('./Settings'), {
	ssr: false,
});

let NoteProvider = dynamic(() => import('./Note'), {
	ssr: false,
});

function ContextsProvider({ children }) {
	return (
		<NoteProvider>
			<SettingsProvider>{children}</SettingsProvider>
		</NoteProvider>
	);
}

export default ContextsProvider;
