import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { MemoryRouter, Router } from 'react-router-dom';
import * as apod from '../../data/apod';
import sampleApod from '../../mocks/sampleApod';
import ApodViewer from './ApodViewer';

const mockFetchApod = jest.spyOn(apod, 'fetchApod');

test('should fetch apod on mount', async () => {
	mockFetchApod.mockResolvedValueOnce(sampleApod);
	render(
		<MemoryRouter>
			<ApodViewer />
		</MemoryRouter>
	);

	expect(mockFetchApod).toBeCalledTimes(1);
	await waitFor(() => expect(screen.queryByTestId('apod-viewer-loader')).not.toBeInTheDocument());
});

test('should display error when failed fetching', async () => {
	mockFetchApod.mockResolvedValueOnce({
		code: 'Oh no',
		message: 'Something went wrong'
	});
	render(
		<MemoryRouter>
			<ApodViewer />
		</MemoryRouter>
	);
	await waitFor(() => {
		expect(screen.getByText('Something went wrong')).toBeInTheDocument();
	});
	await waitFor(() => expect(screen.queryByTestId('apod-viewer-loader')).not.toBeInTheDocument());
});

test('clicking on link should navigate to gallery', async () => {
	mockFetchApod.mockResolvedValueOnce(sampleApod);
	const history = createMemoryHistory();
	render(
		<Router history={history}>
			<ApodViewer />
		</Router>
	);

	await waitFor(() => expect(screen.queryByTestId('apod-viewer-loader')).not.toBeInTheDocument());
	fireEvent.click(screen.getByTestId('gallery-link'));
	await waitFor(() => expect(history.location.pathname.includes('gallery')).toBeTruthy());
});
