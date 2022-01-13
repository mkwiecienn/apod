import { NASAResponseError } from '../../api';
import './ErrorMessage.scss';

interface ErrorMessageProps {
	error: NASAResponseError;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => (
	<div className="ErrorMessage">
		{error.code && <h3>{error.code}</h3>}
		<p>{error.message}</p>
	</div>
);

export default ErrorMessage;
