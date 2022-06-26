import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { About, Artwork, Artworks, Auth, Cover, Navbar } from './containers';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/posts" element={<Artworks />} />
                <Route path="/posts/:id" element={<Artwork />}/>
                <Route path="/auth" element={<Auth />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;