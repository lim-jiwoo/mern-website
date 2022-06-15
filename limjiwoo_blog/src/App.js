import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { About, Artwork, Artworks, Cover, Navbar } from './containers';
import { getPosts } from './actions/posts';

const App = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Navbar currentId={currentId} setCurrentId={setCurrentId} />
            <Routes>
                <Route path="/posts" element={<Artworks setCurrentId={setCurrentId} />}/>
                <Route path="/posts/:id" element={<Artwork />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;