let PrivacyTermsItem = ({ title, children }: any) => {
	return (
		<article className="space-y-2">
			<header>
				<h1 className="text-4xl font-semibold capitalize">{title}</h1>
			</header>
			<main className="text-xl">{children}</main>
		</article>
	);
};

export default PrivacyTermsItem;
