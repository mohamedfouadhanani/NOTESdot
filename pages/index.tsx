import React, { useRef } from 'react';

import Container from '../components/Container';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSettings } from '../contexts/Settings';
import { getLocalNote, setLocalNote } from '../utils/note';
import { useNote } from '../contexts/Note';
import { noteFileExtenstion } from '../constants';

function Home() {
	let { settings } = useSettings();
	let { isDarkTheme } = settings;
	let { setNote } = useNote();
	let router = useRouter();

	let localNote = getLocalNote();
	if (localNote && Object.keys(localNote).length !== 0) {
		router.push('/note');
		return null;
	}

	let fileInput = useRef(null);

	let trigger = () => {
		fileInput.current.click();
	};

	let handleFileChange = async (event: any) => {
		event.preventDefault();

		let reader = new FileReader();

		reader.onload = async e => {
			let text = e!.target!.result;
			let localNote = JSON.parse(text as string);

			setLocalNote(localNote);
			setNote(localNote);

			router.push('/note');
		};

		let files = event.target.files;

		if (
			files &&
			files[0] &&
			files[0].name.split('.').reverse()[0] === noteFileExtenstion
		) {
			reader.readAsText(event.target.files[0]);
		}
		(fileInput.current as any).value = null;
	};

	return (
		<>
			<Head>
				<title>NOTES.</title>
			</Head>
			<Layout full={true}>
				<div className="text-center flex justify-center items-center flex-1">
					<Container className="px-4 py-4 sm:mx-auto sm:px-0 sm:w-9/12 md:w-8/12">
						<div className="space-y-4">
							<h1 className="font-bold text-4xl">
								<span>{settings.language.index.h1}</span>
							</h1>
							<p className="text-lg">{settings.language.index.h2}</p>
							<div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 sm:justify-center sm:items-center">
								<Button
									onClick={() => {
										router.push('/note');
										setNote({
											title: '',
											body: '',
											createdAt: new Date(),
										});
										setLocalNote({
											title: '',
											body: '',
											createdAt: new Date(),
										});
									}}
									className={`${
										isDarkTheme
											? 'bg-gray-100 hover:bg-gray-50 active:bg-gray-200 text-gray-800 hover:text-gray-700 focus:text-gray-900'
											: 'bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-gray-50'
									}`}
								>
									{settings.language.index.create}
								</Button>

								<Button
									onClick={() => trigger()}
									className="bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-gray-50 hover:text-gray-100 active:text-gray-200"
								>
									<span>{settings.language.index.open}</span>
								</Button>
								<input
									type="file"
									hidden={true}
									ref={fileInput}
									onChange={handleFileChange}
								/>
							</div>
						</div>
					</Container>
				</div>
			</Layout>
		</>
	);
}

export default Home;
