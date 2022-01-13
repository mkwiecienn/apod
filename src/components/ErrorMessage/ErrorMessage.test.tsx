import { render, screen } from '@testing-library/react';
import { NASAResponseError } from '../../api';
import ErrorMessage from './ErrorMessage';

const err: NASAResponseError = {
	code: 'sample code',
	message: 'sample message'
};

test('ErrorMessage should include code and message from props', () => {
	render(<ErrorMessage error={err} />);

	expect(screen.getByText(err.code)).toBeInTheDocument();
	expect(screen.getByText(err.message)).toBeInTheDocument();
});
