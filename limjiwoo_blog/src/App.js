import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { About, Artwork, Artworks, Cover, Navbar } from './containers';
import { getPosts } from './actions/posts';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="App">
            <Navbar />
            <About />
        </div>
    )
}

export default App;