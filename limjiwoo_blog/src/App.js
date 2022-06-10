import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { About, Artwork, Artworks, Cover, Navbar } from './containers';
import { getPosts } from './actions/posts';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/posts" element={<Artworks />}/>
                <Route path="/posts/:id" element={<Artwork />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;