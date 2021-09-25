import React, { useEffect, useState } from 'react';
import { useSettings } from '../contexts/Settings';

function CustomInput({
	value,
	label,
	id,
	error,
	labelClassName,
	inputClassName,
	errorClassName,
	validationFunction,
	...rest
}: any) {
	let { settings } = useSettings();
	let { isDarkTheme } = settings;
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
		validationFunction(value, setIsValid);
	}, [value, validationFunction]);

	return (
		<div className={`${labelClassName} flex flex-col`}>
			{label && (
				<label htmlFor={id} className="font-bold text-lg w-max">
					{label}
				</label>
			)}
			<input
				{...rest}
				id={id}
				value={value}
				type="text"
				className={`${inputClassName} rounded-md p-2 outline-none border-2 focus:border-violet-600 
        ${
					isDarkTheme
						? isValid
							? 'bg-gray-800 border-gray-700'
							: 'bg-gray-800 border-red-500 focus:border-red-500 text-red-500'
						: isValid
						? 'border-gray-900'
						: 'border-red-500 focus:border-red-500 text-red-500'
				}
        `}
			/>
			{!isValid && (
				<span className={`${errorClassName} text-sm text-red-500 mt-1`}>
					{error}
				</span>
			)}
		</div>
	);
}

export default CustomInput;
