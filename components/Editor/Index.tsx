import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import UnderlineExtention from '@tiptap/extension-underline';

// CONTEXTS
import { useNote } from '../../contexts/Note';

// COMPONENTS
import Bar from './Bar';
import Editor from './Editor';

let Index = ({ onUpdate, content }) => {
	let { note } = useNote();

	const editor = useEditor({
		extensions: [StarterKit, UnderlineExtention],
		content,
		onUpdate: ({ editor }) => onUpdate(editor.getHTML()),
	});

	return (
		<div className="space-y-2 flex-1">
			<Bar editor={editor} />
			<Editor editor={editor} />
		</div>
	);
};

export default Index;
