import { Route, Routes } from 'react-router-dom';
import ApodViewer from './containers/ApodViewer/ApodViewer';
import Gallery from './containers/Gallery/Gallery';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/" element={<ApodViewer />} />
			</Routes>
		</div>
	);
}

export default App;
