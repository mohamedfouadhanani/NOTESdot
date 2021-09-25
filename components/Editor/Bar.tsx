// COMPONENTS
import Button from './Button/Button';
import ButtonGroup from './Button/ButtonGroup';

// ICONS
import H1Icon from 'remixicon-react/H1Icon';
import H2Icon from 'remixicon-react/H2Icon';
import H3Icon from 'remixicon-react/H3Icon';
import ParagraphIcon from 'remixicon-react/ParagraphIcon';

import BoldIcon from 'remixicon-react/BoldIcon';
import ItalicIcon from 'remixicon-react/ItalicIcon';
import StrikeThroughIcon from 'remixicon-react/StrikethroughIcon';
import UnderlineIcon from 'remixicon-react/UnderlineIcon';

import ListOrderedIcon from 'remixicon-react/ListOrderedIcon';
import ListUnorderedIcon from 'remixicon-react/ListUnorderedIcon';

import DoubleQuotesRIcon from 'remixicon-react/DoubleQuotesRIcon';
import TerminalLineIcon from 'remixicon-react/TerminalLineIcon';

import ArrowGoBackLineIcon from 'remixicon-react/ArrowGoBackLineIcon';
import ArrowGoForwardLineIcon from 'remixicon-react/ArrowGoForwardLineIcon';

let Bar = ({ editor }) => {
	if (!editor) {
		return null;
	}

	return (
		<>
			<div className="block lg:hidden">
				<ButtonGroup className="space-x-1">
					<Button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 1 }).run()
						}
						isActive={editor.isActive('heading', { level: 1 })}
						icon={<H1Icon />}
					/>
					<Button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 2 }).run()
						}
						isActive={editor.isActive('heading', { level: 2 })}
						icon={<H2Icon />}
					/>
					<Button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 3 }).run()
						}
						isActive={editor.isActive('heading', { level: 3 })}
						icon={<H3Icon />}
					/>
					<Button
						onClick={() => editor.chain().focus().setParagraph().run()}
						isActive={editor.isActive('paragraph')}
						icon={<ParagraphIcon />}
					/>
					<Button
						onClick={() => editor.chain().focus().toggleBold().run()}
						isActive={editor.isActive('bold')}
						icon={<BoldIcon />}
					/>
					<Button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						isActive={editor.isActive('italic')}
						icon={<ItalicIcon />}
					/>
					<Button
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						isActive={editor.isActive('underline')}
						icon={<UnderlineIcon />}
					/>
					<Button
						onClick={() => editor.chain().focus().toggleStrike().run()}
						isActive={editor.isActive('strike')}
						icon={<StrikeThroughIcon />}
					/>
				</ButtonGroup>
				<ButtonGroup>
					<Button
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						isActive={editor.isActive('bulletList')}
						icon={<ListUnorderedIcon />}
					/>
					<Button
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						isActive={editor.isActive('orderedList')}
						icon={<ListOrderedIcon />}
					/>
					<Button
						onClick={() => editor.chain().focus().undo().run()}
						isActive={false}
						icon={<ArrowGoBackLineIcon />}
					/>
					<Button
						onClick={() => editor.chain().focus().redo().run()}
						isActive={false}
						icon={<ArrowGoForwardLineIcon />}
					/>
				</ButtonGroup>
			</div>
			<div className="hidden lg:block">
				<div className="flex">
					<ButtonGroup className="flex flex-1 space-x-8">
						<ButtonGroup className="space-x-1">
							<Button
								onClick={() =>
									editor.chain().focus().toggleHeading({ level: 1 }).run()
								}
								isActive={editor.isActive('heading', { level: 1 })}
								icon={<H1Icon />}
							/>
							<Button
								onClick={() =>
									editor.chain().focus().toggleHeading({ level: 2 }).run()
								}
								isActive={editor.isActive('heading', { level: 2 })}
								icon={<H2Icon />}
							/>
							<Button
								onClick={() =>
									editor.chain().focus().toggleHeading({ level: 3 }).run()
								}
								isActive={editor.isActive('heading', { level: 3 })}
								icon={<H3Icon />}
							/>
							<Button
								onClick={() => editor.chain().focus().setParagraph().run()}
								isActive={editor.isActive('paragraph')}
								icon={<ParagraphIcon />}
							/>
						</ButtonGroup>
						<ButtonGroup className="space-x-1">
							<Button
								onClick={() => editor.chain().focus().toggleBold().run()}
								isActive={editor.isActive('bold')}
								icon={<BoldIcon />}
							/>
							<Button
								onClick={() => editor.chain().focus().toggleItalic().run()}
								isActive={editor.isActive('italic')}
								icon={<ItalicIcon />}
							/>
							<Button
								onClick={() => editor.chain().focus().toggleUnderline().run()}
								isActive={editor.isActive('underline')}
								icon={<UnderlineIcon />}
							/>
							<Button
								onClick={() => editor.chain().focus().toggleStrike().run()}
								isActive={editor.isActive('strike')}
								icon={<StrikeThroughIcon />}
							/>
						</ButtonGroup>
						<ButtonGroup className="space-x-1">
							<Button
								onClick={() => editor.chain().focus().toggleBulletList().run()}
								isActive={editor.isActive('bulletList')}
								icon={<ListUnorderedIcon />}
							/>
							<Button
								onClick={() => editor.chain().focus().toggleOrderedList().run()}
								isActive={editor.isActive('orderedList')}
								icon={<ListOrderedIcon />}
							/>
						</ButtonGroup>
						<ButtonGroup className="space-x-1">
							<Button
								onClick={() => editor.chain().focus().toggleCodeBlock().run()}
								isActive={editor.isActive('codeBlock')}
								icon={<TerminalLineIcon />}
							/>
							<Button
								onClick={() => editor.chain().focus().toggleBlockquote().run()}
								isActive={editor.isActive('blockquote')}
								icon={<DoubleQuotesRIcon />}
							/>
						</ButtonGroup>
					</ButtonGroup>
					<ButtonGroup className="space-x-1">
						<Button
							onClick={() => editor.chain().focus().undo().run()}
							isActive={false}
							icon={<ArrowGoBackLineIcon />}
						/>
						<Button
							onClick={() => editor.chain().focus().redo().run()}
							isActive={false}
							icon={<ArrowGoForwardLineIcon />}
						/>
					</ButtonGroup>
				</div>
			</div>
		</>
	);
};

export default Bar;
