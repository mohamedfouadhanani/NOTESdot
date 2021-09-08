export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = url => {
	if (process.env.NODE_ENV === 'development') {
		(window as any).gtag('config', GA_TRACKING_ID, {
			page_path: url,
		});
	}
};

export const event = ({ action, category, label, value }) => {
	if (process.env.NODE_ENV === 'development') {
		(window as any).gtag('event', action, {
			event_category: category,
			event_label: label,
			value: value,
		});
	}
};
