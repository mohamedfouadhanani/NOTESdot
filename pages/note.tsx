import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { DownloadIcon, TrashIcon, EyeIcon } from '@heroicons/react/solid';

// COMPONENTS
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import Layout from '../components/Layout';
import Alert from '../components/Alert';
import Button from '../components/Button';

let Editor = dynamic(import('../components/Editor/Index'), {
	ssr: false,
});

// CONTEXTS
import { useSettings } from '../contexts/Settings';
import { useNote } from '../contexts/Note';
import { useRouter } from 'next/router';

// CONSTANTS
import { LANGUAGE, noteFileExtenstion } from '../constants';

// UTILS
import { getLocalNote, setLocalNote } from '../utils/note';

// TYPES
import TypeAlert, { EAlertType } from '../interfaces/Alert';

function note() {
	let { note, setNote } = useNote();
	let { settings } = useSettings();
	let { isDarkTheme } = settings;
	let router = useRouter();

	let [title, setTitle] = useState(note.title);
	let [body, setBody] = useState(note.body);

	useEffect(() => {
		let modifiedNote = { title, body, createdAt: note.createdAt };

		setNote(modifiedNote);
	}, [title, body]);

	// ALERTS
	let [alerts, setAlerts] = useState<TypeAlert[]>([]);

	if (note === null) {
		router.push('/');
		return null;
	}

	useEffect(() => {
		setLocalNote(note);
	}, [note]);

	let saveNoteLocally = () => {
		let note = getLocalNote();
		if (note.title !== '') {
			let noteString = JSON.stringify(note);

			let file = new Blob([noteString], { type: 'text/plain' });

			let element = document.createElement('a');
			element.href = URL.createObjectURL(file);
			element.download = `${note.title}.${noteFileExtenstion}`;

			document.body.appendChild(element);
			element.click();
		} else {
			alerts.push({
				type: EAlertType.ERROR,
				message: LANGUAGE[settings.language].note.emptyTitle,
			});
			setAlerts([...alerts]);
		}
	};

	return (
		<>
			<Head>
				<title>NOTES. | Note</title>
			</Head>
			<Layout full={true}>
				<Container className="px-4 py-4 mx-0 sm:mx-auto sm:px-0 sm:w-9/12 md:w-8/12 flex-1 flex flex-col space-y-8">
					{alerts && alerts.length !== 0 && (
						<div className="space-y-2">
							{alerts.map((alert, idx) => {
								return (
									<Alert
										onClose={() => {
											alerts.splice(idx, 1);
											let alertsFiltered = alerts;
											setAlerts([...alertsFiltered]);
										}}
										type={alert.type}
										message={alert.message}
										key={idx}
									/>
								);
							})}
						</div>
					)}
					<CustomInput
						id="title"
						value={title}
						onChange={e => {
							setTitle(e.target.value);
						}}
						label=""
						error={LANGUAGE[settings.language].note.error}
						labelClassName=""
						inputClassName=""
						errorClassName=""
						placeholder={LANGUAGE[settings.language].note.placeholder}
						validationFunction={(title: string, setIsValid) => {
							if (title && title !== '') {
								setIsValid(title.length > 5);
							} else {
								setIsValid(true);
							}
						}}
					/>
					<Editor
						content={body}
						onUpdate={html => {
							setBody(html);
						}}
					/>
					<div className="flex flex-col space-y-2 text-sm md:flex-row md:space-y-0 md:space-x-2 md:justify-end">
						<Button
							onClick={saveNoteLocally}
							className={`${
								isDarkTheme
									? 'hover:bg-gray-800 active:bg-gray-900 text-gray-200 active:text-gray-300 border-white'
									: 'hover:bg-gray-100 active:bg-gray-200 text-gray-900 active:text-gray-800 border-gray-900'
							} flex justify-center items-center space-x-2 w-auto border-2 font-bold`}
						>
							<DownloadIcon height={25} />
							<span>{LANGUAGE[settings.language].note.saveLocally}</span>
						</Button>
						<Button
							onClick={() => {
								let result = window.confirm(
									'You are about to delete the note, any unsaved changes will be lost.'
								);
								if (result) {
									window.localStorage.removeItem('NOTES._NOTE');
									router.push('/');
								}
							}}
							className="bg-red-600 hover:bg-red-500 active:bg-red-700 text-white flex justify-center items-center space-x-2 sm:space-x-0 px-0 md:px-2 font-bold"
						>
							<TrashIcon height={25} />
							<span className="block sm:hidden">Delete Note</span>
						</Button>
						<Button
							onClick={() => {
								if (note.title !== '') {
									router.push('/preview');
								} else {
									alerts.push({
										type: EAlertType.ERROR,
										message: LANGUAGE[settings.language].note.emptyTitle,
									});
									setAlerts([...alerts]);
								}
							}}
							className={`${
								isDarkTheme
									? 'bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-gray-200 hover:text-gray-100 active:text-gray-300'
									: 'bg-gray-900 hover:bg-gray-700 active:bg-gray-800 text-gray-50 hover:text-white active:text-gray-100'
							} flex items-center justify-center space-x-2 w-auto font-bold`}
						>
							<EyeIcon height={25} />
							<span>{LANGUAGE[settings.language].note.preview}</span>
						</Button>
					</div>
				</Container>
			</Layout>
		</>
	);
}

export default note;
