function Button({ children, className, ...rest }: any) {
	return (
		<button
			{...rest}
			className={`rounded px-6 py-2 transition-all ${className}`}
		>
			{children}
		</button>
	);
}

export default Button;
