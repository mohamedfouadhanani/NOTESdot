import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import PrivacyTermsItem from '../components/PrivacyTermsItem';

let Privacy = () => {
	return (
		<>
			<Head>
				<title>NOTES. | Privacy Policy</title>
			</Head>
			<Layout full={false}>
				<div className="p-4 space-y-6 max-w-4xl mx-auto">
					<PrivacyTermsItem title="Privacy Policy">
						<div className="space-y-2">
							<p>
								<span className="font-semibold">Effective date:</span> September
								13, 2021.
							</p>
							<p>
								We do not collect data, but we use some Third Party Services
								that my do. This app may contain false data and we do not
								knowingly serve it. It's just a personnal project specifically
								built to enrich portfolio and nothing more, if you want
								information about the weather please use other apps.
							</p>
						</div>
					</PrivacyTermsItem>
					<PrivacyTermsItem title="Analytics">
						<p>
							We may use third-party Service Providers to monitor and analyze
							the use of our Service such as Google Analytics, which is a web
							analytics service offered by Google that tracks and reports
							website traffic. Google uses the data collected to track and
							monitor the use of our Service. This data is shared with other
							Google services. Google may use the collected data to
							contextualize and personalize the ads of its own advertising
							network. You can opt-out of having made your activity on the
							Service available to Google Analytics by installing the Google
							Analytics opt-out browser add-on. For more information on the
							privacy practices of Google, please visit the Google Privacy &
							Terms web page:{' '}
							<Link href="https://policies.google.com/privacy?hl=en">
								<a className="text-blue-500 hover:text-blue-400">
									https://policies.google.com/privacy?hl=en
								</a>
							</Link>
						</p>
					</PrivacyTermsItem>
					<PrivacyTermsItem title="Changes To This Privacy Policy">
						<p>
							We may update our Privacy Policy from time to time without notice.
						</p>

						<p>
							You are advised to review this Privacy Policy periodically for any
							changes. Changes to this Privacy Policy are effective when they
							are posted on this page.
						</p>
					</PrivacyTermsItem>
					<PrivacyTermsItem title="Consent">
						<p>
							By using our website, you hereby consent to our Privacy Policy and
							agree to its Terms and Conditions.
						</p>
					</PrivacyTermsItem>
					<PrivacyTermsItem title="Contact Us">
						<p>
							If you have any questions about this Privacy Policy, please
							contact us by email @ info.fouadhanani@gmail.com
						</p>
					</PrivacyTermsItem>
				</div>
			</Layout>
		</>
	);
};

export default Privacy;
