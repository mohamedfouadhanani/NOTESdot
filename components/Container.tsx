function Container({ children, className }: any) {
	return <div className={`${className} bg-transparent`}>{children}</div>;
}

export default Container;
