import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import INote from '../interfaces/INote';
import { getLocalNote } from '../utils/note';

export const NoteContext = createContext(null);

export function useNote(): {
	note: INote;
	setNote: Dispatch<SetStateAction<INote>>;
} {
	return useContext(NoteContext);
}

function NoteProvider({ children }) {
	let localNote = getLocalNote();

	let [note, setNote] = useState<INote>(
		localNote && Object.keys(localNote).length !== 0 ? localNote : null
	);

	let context: { note: INote; setNote: Dispatch<SetStateAction<INote>> } = {
		note,
		setNote,
	};

	return (
		<NoteContext.Provider value={context}>{children}</NoteContext.Provider>
	);
}

export default NoteProvider;
