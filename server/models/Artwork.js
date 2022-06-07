import mongoose from 'mongoose';

const artworkSchema = mongoose.Schema({
    title: String,
    tags: [String],
    image: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const Artwork = mongoose.model('Artwork', artworkSchema);
export default Artwork;