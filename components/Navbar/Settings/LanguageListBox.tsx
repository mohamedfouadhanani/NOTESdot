import { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useSettings } from '../../../contexts/Settings';
import { LANGUAGE } from '../../../constants';
import { setLocalSettings } from '../../../utils/settings';

function LanguageListBox() {
	let { settings, setSettings } = useSettings();
	let { isDarkTheme, language } = settings;
	const [selected, setSelected] = useState(
		LANGUAGE[language.name.toLowerCase()]
	);

	useEffect(() => {
		setSettings({ ...settings, language: selected });
		setLocalSettings({ ...settings, language: selected });
	}, [selected]);

	return (
		<Listbox value={selected} onChange={setSelected}>
			<div className="relative mt-1">
				<Listbox.Button
					className={`${
						isDarkTheme ? 'ring-gray-700 bg-gray-900' : 'ring-gray-200 bg-white'
					} relative w-full py-2 pl-3 pr-10 text-left rounded cursor-pointer outline-none ring-1`}
				>
					<span className="block truncate">{selected.name}</span>
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<ChevronDownIcon
							className="w-5 h-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options
						className={`${
							isDarkTheme
								? 'ring-gray-700 bg-gray-900'
								: 'ring-gray-200 bg-white'
						} z-[1000] absolute w-full py-1 mt-1 overflow-auto text-base rounded shadow max-h-60 outline-none ring-1`}
					>
						{Object.values(LANGUAGE).map((language, languageIdx) => (
							<Listbox.Option
								key={languageIdx}
								className={({ active }) =>
									`${
										isDarkTheme
											? active
												? 'text-gray-50 bg-gray-800'
												: 'text-gray-50'
											: active
											? 'text-gray-800 bg-gray-100'
											: 'text-gray-800'
									} cursor-default select-none relative py-2 pl-10 pr-4`
								}
								value={language}
							>
								{({ selected, active }) => (
									<>
										<span
											className={`${
												selected ? 'font-bold' : 'font-normal'
											} block truncate`}
										>
											{language.name}
										</span>
										{selected ? (
											<span
												className={`${
													isDarkTheme
														? active
															? 'bg-gray-800'
															: ''
														: active
														? 'bg-gray-100'
														: ''
												} absolute inset-y-0 left-0 flex items-center pl-3`}
											>
												<CheckCircleIcon
													className="w-5 h-5"
													aria-hidden="true"
												/>
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}

export default LanguageListBox;
