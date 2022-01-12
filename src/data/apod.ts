import API, { isNASAError, NASAResponseError } from '../api';
import DB from '../db/db';

export interface APOD {
	copyright?: string;
	date: string;
	explanation: string;
	hdurl: string;
	title: string;
	url: string;
}

export const compareApod = (a: APOD, b: APOD) => a.url === b.url;

export async function fetchApod(): Promise<APOD | NASAResponseError> {
	const res = await API.fetchAPODs();

	if (isNASAError(res)) {
		return res;
	} else {
		const apod = res[0];
		const viewed = DB.getViewedApods();

		if (!!viewed.find((x) => compareApod(x, apod))) {
			return fetchApod();
		} else {
			DB.markApodAsViewed(apod);
			return apod;
		}
	}
}

export function saveApod(apod: APOD): void {
	DB.saveApod(apod);
}

export function clearSaved(): void {}
