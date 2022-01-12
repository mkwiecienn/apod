import { APOD } from './data/apod';

export interface NASAResponseError {
	code: string;
	message: string;
}

export type NASAResponse = NASAResponseError | APOD[];

export function isNASAError(x: NASAResponse | APOD): x is NASAResponseError {
	return !!(x as NASAResponseError).code || !!(x as NASAResponseError).message;
}

const API = {
	async fetchAPODs(count = 1): Promise<NASAResponse> {
		const apiKey = process.env.REACT_APP_API_KEY;

		if (!apiKey) {
			throw new Error('REACT_APP_API_KEY is not set.');
		}

		const url =
			'https://api.nasa.gov/planetary/apod?' +
			new URLSearchParams({
				api_key: apiKey,
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
};

export default API;
