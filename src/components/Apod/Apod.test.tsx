import { fireEvent, render, screen } from '@testing-library/react';
import sampleApod from '../../mocks/sampleApod';
import Apod from './Apod';

test('renders basic apod details', async () => {
	render(<Apod apod={{ ...sampleApod }} />);
	expect(screen.getByText('24-12-1993')).toBeInTheDocument();
	expect(screen.getByText('Sample title')).toBeInTheDocument();
});

test('hides loader on img error', () => {
	render(<Apod apod={{ ...sampleApod }} />);

	expect(screen.getByText('Loading...')).toBeInTheDocument();

	fireEvent.error(screen.getByRole('img'));
	expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});

test('hides loader on image load', () => {
	render(<Apod apod={{ ...sampleApod }} />);

	expect(screen.getByText('Loading...')).toBeInTheDocument();

	fireEvent.load(screen.getByRole('img'));
	expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});

test('shows loader when img url changes', async () => {
	const { rerender } = render(<Apod apod={sampleApod} />);

	expect(screen.getByText('Loading...')).toBeInTheDocument();

	fireEvent.load(screen.getByRole('img'));
	expect(screen.queryByText('Loading...')).not.toBeInTheDocument();

	rerender(<Apod apod={{ ...sampleApod, url: 'another url' }} />);

	expect(screen.getByText('Loading...')).toBeInTheDocument();
	fireEvent.load(screen.getByRole('img'));
	expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
