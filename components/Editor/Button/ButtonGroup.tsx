interface IProps {
	children: any;
	className?: string;
}

function ButtonGroup({ children, className }: IProps) {
	return <div className={`${className}`}>{children}</div>;
}

export default ButtonGroup;
