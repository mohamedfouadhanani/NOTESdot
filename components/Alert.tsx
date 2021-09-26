import { XCircleIcon, XIcon } from '@heroicons/react/outline';

function Alert({ type, message, onClose }) {
	let styles = {
		ERROR: {
			text: 'text-red-600',
			border: 'border-red-600',
			hoverBorder: 'hover:bg-red-100',
		},
		SUCCESS: {
			text: 'text-green-600',
			border: 'border-green-600',
			hoverBorder: 'hover:bg-green-100',
		},
		INFO: {
			text: 'text-blue-600',
			border: 'border-blue-600',
			hoverBorder: 'hover:bg-blue-100',
		},
	};

	let style =
		type === 'ERROR'
			? styles.ERROR
			: type === 'SUCCESS'
			? styles.SUCCESS
			: styles.INFO;
	return (
		<div
			className={`flex justify-between items-center space-x-2 border-2 border-l-4 rounded-md p-2 pr-1 ${style.border} ${style.text}`}
		>
			<XCircleIcon height={25} />
			<p className={`flex-1`}>{message}</p>
			<div>
				<button
					className={`rounded transition-all flex flex-col justify-center ${style.hoverBorder}`}
					onClick={onClose}
				>
					<XIcon height={25} />
				</button>
			</div>
		</div>
	);
}

export default Alert;
