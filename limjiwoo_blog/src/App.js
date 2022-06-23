import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { About, Artwork, Artworks, Cover, Navbar } from './containers';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/posts" element={<Artworks />} />
                <Route path="/posts/:id" element={<Artwork />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;