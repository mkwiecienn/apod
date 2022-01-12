/**
 * This is wrapper of the db. If we want to use something else for storage,
 * we should change it here.
 */

import { APOD, compareApod } from '../data/apod';

// Currently we use localStorage as a DB layer
import LS from './localStorage';

const LS_VIEWED_APODS_KEY = 'viewedApods';
const LS_SAVED_APODS_KEY = 'savedApods';

const DB = {
	markApodAsViewed(apod: APOD) {
		LS.addItemToArr(LS_VIEWED_APODS_KEY, apod, compareApod);
	},
	saveApod(apod: APOD) {
		LS.addItemToArr(LS_SAVED_APODS_KEY, apod, compareApod);
	},
	getViewedApods(): APOD[] {
		return LS.getItems(LS_VIEWED_APODS_KEY) || [];
	},
	getSavedApods(): APOD[] {
		return LS.getItems(LS_SAVED_APODS_KEY) || [];
	},
	clearSaved() {
		LS.clear(LS_SAVED_APODS_KEY);
	}
};

export default DB;
