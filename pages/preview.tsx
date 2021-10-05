import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react/solid';

// COMPONENTS
import Button from '../components/Button';
import Container from '../components/Container';

// CONSTANTS
import { LANGUAGE } from '../constants';

// CONTEXTS
import { useNote } from '../contexts/Note';
import { useSettings } from '../contexts/Settings';

function preview() {
	let { note } = useNote();
	let { settings } = useSettings();
	let router = useRouter();

	return (
		<>
			<Head>
				<title>NOTES. | Note</title>
			</Head>
			<Container className="px-4 py-4 mx-0 sm:mx-auto sm:px-0 sm:w-9/12 md:w-8/12 flex-1 flex flex-col space-y-4">
				<div className="ProseMirror space-y-8">
					<h1>{note.title}</h1>
					<div
						className="ProseMirror"
						dangerouslySetInnerHTML={{ __html: note.body }}
					/>
				</div>
				<div className="flex flex-col space-y-2 text-sm md:flex-row md:space-y-0 md:space-x-2 md:justify-start">
					<Button
						onClick={() => {
							router.push('/note');
						}}
						className={`bg-gray-900 hover:bg-gray-700 active:bg-gray-800 text-gray-50 hover:text-white active:text-gray-100 flex items-center justify-center space-x-2 w-auto font-bold`}
					>
						<ArrowLeftIcon height={20} />
						<span>{LANGUAGE[settings.language].notFound.button}</span>
					</Button>
				</div>
			</Container>
		</>
	);
}

export default preview;
