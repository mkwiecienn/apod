import { Route, Switch } from 'react-router-dom';
import ApodViewer from './containers/ApodViewer/ApodViewer';
import Gallery from './containers/Gallery/Gallery';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/gallery">
					<Gallery />
				</Route>
				<Route path="/">
					<ApodViewer />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
