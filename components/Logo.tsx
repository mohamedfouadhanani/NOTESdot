import React from 'react';

function Logo({ fontSize }: any) {
	return (
		<span
			className={`text-${fontSize} capitalize RozhaOne cursor-default select-none`}
		>
			NOTES.
		</span>
	);
}

export default Logo;
