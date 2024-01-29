import express from 'express';
import connect from './config/database.js'
const app = express();

import TweetRepository from './repository/tweet-repository.js';

app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongo connected');

    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content : 'with hoooks now'});
    console.log(tweet);
})