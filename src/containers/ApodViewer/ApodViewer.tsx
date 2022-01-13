import { useEffect, useState } from 'react';
import { APOD, fetchApod, saveApod } from '../../data/apod';
import Apod from '../../components/Apod/Apod';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { isNASAError, NASAResponseError } from '../../api';
import { Link } from 'react-router-dom';
import './ApodViewer.scss';

function ApodViewer() {
	const [ apod, setApod ] = useState<APOD>();
	const [ loading, setLoading ] = useState<boolean>(false);
	const [ error, setError ] = useState<NASAResponseError | null>();

	const getApod = async () => {
		setLoading(true);
		setError(null);

		const apodRes = await fetchApod();

		if (isNASAError(apodRes)) {
			setError(apodRes);
		} else {
			setApod(apodRes);
		}

		setLoading(false);
	};

	const addToFavourite = () => {
		if (apod) {
			saveApod(apod);
		}
	};

	useEffect(() => {
		getApod();
	}, []);

	return (
		<div className="ApodViewer">
			{loading && <span data-testid="apod-viewer-loader">Loading...</span>}
			{error && <ErrorMessage error={error} />}
			{apod && <Apod apod={apod} />}
			<div className="buttons-wrapper">
				<button className="footer-item" onClick={getApod}>
					next
				</button>
				<button className="footer-item" onClick={addToFavourite}>
					save
				</button>
				<Link data-testid="gallery-link" className="footer-item" to="/gallery">
					Go to gallery
				</Link>
			</div>
		</div>
	);
}

export default ApodViewer;
