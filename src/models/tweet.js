import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    hastags : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hashtag'  
    }]
})

const Tweet = mongoose.model('Tweet',tweetSchema);
export default Tweet;