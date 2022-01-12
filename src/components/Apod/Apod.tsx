import { useEffect, useState } from 'react';
import { APOD } from '../../data/apod';
import './Apod.scss';

interface ApodProps {
	apod: APOD;
}

const Apod = ({ apod }: ApodProps) => {
	const [ loading, setLoading ] = useState<boolean>(false);

	useEffect(
		() => {
			setLoading(true);
		},
		[ apod.url ]
	);

	const stopLoader = () => {
		setLoading(false);
	};

	return (
		<div className="Apod">
			<table className="details-table">
				<tbody>
					<tr>
						<td />
						<td className="apod-img-wrapper">
							{loading && <p className="loader">Loading...</p>}
							<img
								className={`apod-img ${loading ? 'loading' : ''}`}
								alt={apod.title}
								src={apod.url}
								onLoad={stopLoader}
								onError={stopLoader}
							/>
						</td>
					</tr>
					<tr>
						<td>title</td>
						<td>{apod.title}</td>
					</tr>
					<tr>
						<td>date</td>
						<td>{apod.date}</td>
					</tr>
					<tr>
						<td>explanation</td>
						<td>{apod.explanation}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Apod;
