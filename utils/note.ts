import INote from '../interfaces/INote';

export const getLocalNote = (): INote => {
	let noteString: string = localStorage.getItem('NOTES._NOTE');
	let note: INote = JSON.parse(noteString);
	return note;
};

export const setLocalNote = (note: INote): void => {
	let noteString: string = JSON.stringify(note);
	localStorage.setItem('NOTES._NOTE', noteString);
};
