import Artwork from '../models/Artwork.js';

export const getPosts = async (req, res) => {
    try {
        const artworks = await Artwork.find();
        res.status(200).json(artworks);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPosts = async (req, res) => {
    const body = req.body;
    const newArtwork = new Artwork(body);
    
    try {
        await newArtwork.save();
        res.statu(201).json(newArtwork);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
} 