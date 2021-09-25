import Link from 'next/link';
import { useSettings } from '../contexts/Settings';

function CustomLink({ className, href, value, ...rest }: any) {
	let { settings }: any = useSettings();
	let { isDarkTheme } = settings;

	return (
		<Link href={href}>
			<a
				{...rest}
				className={`${className} ${
					isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-500'
				} transition-all`}
			>
				{value}
			</a>
		</Link>
	);
}

export default CustomLink;
