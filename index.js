require('dotenv').config()
console.log("Starting the Bot..");
// const config = require("./config/default.env")
const Twit = require("twit");
const axios = require('axios');
const {
    hashtags
} = require('./hashtags');

const config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_KEY_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

// Create new twit instance
const T = new Twit(config)


// Post a joke daily
/* postStatusUpdate()
 setTimeout(postStatusUpdate, 86400000)
async function postStatusUpdate() {
	const joke = await axios.get("https://icanhazdadjoke.com/", {headers: {'Accept': 'application/json'}}).then(res => {
		return res.data.joke
	});
	if(joke) {
		T.post('statuses/update',{status: joke}, responseCallback)
	}
	
} */

let likeCount = 0;
let retweetCount = 0;
let filterCount = 0;
let totalCount = 0;

const oneHour = 1000 * 60 * 60;
const tenMinutes = 1000 * 10 * 60;

// Stream on favorite tweets, hastags and retweet them
likeAndReTweet()
setTimeout(likeAndReTweet, tenMinutes);

function likeAndReTweet() {

    likeCount = 0;
    retweetCount = 0;
    filterCount = 0;
    totalCount = 0;

    const filterStream = T.stream('statuses/filter', {
        track: hashtags
    })
    filterCount++;

    filterStream.on('tweet', function (tweet) {

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
            console.log('----------- Will Run after 10 Minutes :) -----------');
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