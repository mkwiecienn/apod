export interface NASAResponseError {
	code: string;
	message: string;
}

export interface APOD {
	copyright?: string;
	date: string;
	explanation: string;
	hdurl: string;
	title: string;
	url: string;
}

export type NASAResponse = NASAResponseError | APOD[];

export function isNASAError(x: NASAResponse): x is NASAResponseError {
	return !!(x as NASAResponseError).code || !!(x as NASAResponseError).message;
}

export async function fetchApod(count = 1): Promise<NASAResponse> {
	console.log(process.env);
	const apiKey = process.env.REACT_APP_API_KEY;

	if (!apiKey) {
		throw new Error('REACT_APP_API_KEY is not set.');
	}

	const url =
		'https://api.nasa.gov/planetary/apod?' +
		new URLSearchParams({
			api_key: apiKey,
			// api_key: 'aaa',
			count: count.toString()
		}).toString();

	try {
		const res = await fetch(url);
		const parsed = await res.json();

		if (parsed.error) return parsed.error;
		return parsed;
	} catch (err) {
		return {
			code: '',
			message: 'Failed to fetch the api. Please try again later.'
		};
	}
}
