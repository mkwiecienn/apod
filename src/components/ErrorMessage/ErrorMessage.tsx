import { NASAResponseError } from "../../api";
import './ErrorMessage.css';

interface ErrorMessageProps {
    error: NASAResponseError
}

const ErrorMessage =  ({ error }: ErrorMessageProps) => <p className='ErrorMessage'>
    {error.code && <h3>{error.code}</h3>}
    <p>{error.message}</p>
</p>

export default ErrorMessage;

