import React from 'react';

function MenuItem({ title, children }: any) {
	return (
		<div className="space-y-2">
			<h4 className="font-bold text-sm">{title}</h4>
			{children}
		</div>
	);
}

export default MenuItem;
