require('dotenv').config()
console.log("Starting the Bot..");
const Twit = require("twit");
const axios = require('axios');
const {
    hashtags
} = require('./hashtags');
const { quotes } = require("./quotes");

const config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_KEY_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

// Create new twit instance
const T = new Twit(config)

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

shuffle(hashtags);


const oneHour = 1000 * 60 * 60;
// const tenMinutes = 1000 * 10 * 60;

// Post a Bitcoin quote
let quoteNum = 0;
postStatusUpdate()
setTimeout(postStatusUpdate, oneHour)
async function postStatusUpdate() {
    let quote = quotes[quoteNum];
	if(quote) {
        const status = `${quote.content}\n\n~ ${quote.author}`;
        if(status.length <= 280) {
            // Posting a new Bitcoin Tweet
            console.log(`-----------  Posting a new Bitcoin Tweet -----------`);
            T.post('statuses/update',{"status": status}, responseCallback);
            quoteNum++;
        }
	} else {
        quoteNum = 0;
    }
	
}


let likeCount = 0;
let retweetCount = 0;
let filterCount = 0;
let totalCount = 0;

// Stream on favorite tweets, hastags and retweet them
likeAndReTweet()
setTimeout(likeAndReTweet, oneHour);

function likeAndReTweet() {

    likeCount = 0;
    retweetCount = 0;
    filterCount = 0;
    totalCount = 0;

    const filterStream = T.stream('statuses/filter', {
        track: hashtags,
        language: 'en'
    })
    filterCount++;

    filterStream.on('tweet', function (tweet) {

        // console.log(tweet);

        // totalCount = likeCount + retweetCount;
        console.log(`----------- Total Request Count: ${totalCount} -----------`);

        if (totalCount < 6) {
            // Like the tweets..
            console.log(`-----------  Liking tweet ${tweet.id_str} -----------`);
            T.post('favorites/create', {
                id: tweet.id_str
            }, likeResponseCallback);
            likeCount++;

            // Retweet
            console.log(`----------- Retweeting tweet ${tweet.id_str} -----------`);
            T.post('statuses/retweet/:id', {
                id: tweet.id_str
            }, retweetResponseCallback)
            retweetCount++;

            totalCount++;
        } else {
            console.log('----------- Limit Exceeded :( -----------');
            console.log('----------- Stopping Filter Stream -----------');
            filterStream.stop();
            console.log('----------- Will Run after 1 Hour :) -----------');
        }
    });
}


function likeResponseCallback(err) {
    if (err) console.log("error:", err)
    likeCount--;
}

function retweetResponseCallback(err) {
    if (err) console.log("error:", err)
    retweetCount--
}

function responseCallback(err) {
    if (err) console.log("error:", err)
}