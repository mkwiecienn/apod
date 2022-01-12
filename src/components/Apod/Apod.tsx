import { APOD } from '../../data/apod';
import './Apod.scss';

interface ApodProps {
	apod: APOD;
}

const Apod = ({ apod }: ApodProps) => (
	<div className="Apod">
		<table className="details-table">
			<tbody>
				<tr>
					<td />
					<td className="apod-img-wrapper">
						<img className="apod-img" alt={apod.title} src={apod.url} />
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

export default Apod;
