import express from 'express';
import connect from './config/database.js'
const app = express();

import TweetRepository from './repository/tweet-repository.js';
import TweetService from './services/tweet-service.js'; 
// import HashtagRepository from './repository/hashtag-repository.js';



app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('mongo connected');

    // const service = new TweetService();
    // const tweet = await service.create({
    //     content: 'this is #fun #c++ of all #whyNot #75WeekOfLifeChallenge'
    // })
    // console.log(tweet);

    




    //creating new tweet
    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content : 'with hoooks now'});
    // console.log(tweet);


    //creating new hashtags
    // const hashgtagRepo = new HashtagRepository();
    // const tag = await hashgtagRepo.bulkCreate([
    //     {
    //         title : 'Excited',
    //         tweet: []
    //     },{
    //         title : 'Fun',
    //         tweet: []
    //     },{
    //         title : 'Career',
    //         tweet: []
    //     },{
    //         title : 'Health',
    //         tweet: []
    //     },{
    //         title : 'Javascript',
    //         tweet: []
    //     },{
    //         title : 'Java',
    //         tweet: []
    //     },{
    //         title : 'Python',
    //         tweet: []
    //     }
    // ]);
    // console.log(tag);
})