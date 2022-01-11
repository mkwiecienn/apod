import React, { useEffect } from 'react';
import './App.css';
import { fetchApod } from './api';
import ApodViewer from './containers/ApodViewer/ApodViewer';

function App() {
  useEffect(() => {
    fetchApod()
  })

  return (
    <div className="App">
      <ApodViewer/>
    </div>
  );
}

export default App;
