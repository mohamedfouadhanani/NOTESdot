import { EditorContent } from '@tiptap/react';
import { useSettings } from '../../contexts/Settings';

let Editor = ({ editor }) => {
	let { settings } = useSettings();
	let { isDarkTheme } = settings;

	return (
		<EditorContent
			className={`${
				isDarkTheme && 'bg-white text-black'
			} border-gray-900 rounded-md border-2 p-4`}
			editor={editor}
		/>
	);
};

export default Editor;
