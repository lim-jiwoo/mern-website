import React from 'react';

import './App.css';
import { About, Artwork, Artworks, Cover, Navbar } from './containers';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <About />
        </div>
    )
}

export default App;