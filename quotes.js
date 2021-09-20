let quotes = [
    /*{
        content: "Bitcoin is absolutely the Wild West of finance, and thank goodness. It represents a whole legion of adventurers and entrepreneurs, of risk takers, inventors, and problem solvers. It is the frontier. Huge amounts of wealth will be created and destroyed as this new landscape is mapped out.",
        author: "Erik Voorhees"
    },*/
    {
        content: "Just as it got easier to use email, it will be easier to use Bitcoin as people invest in it and become more familiar with it.",
        author: "Gavin Andresen"
    },
    {
        content: "Bitcoin is a swarm of cyber hornets serving the goddess of wisdom, feeding on the fire of truth, exponentially growing ever smarter, faster, and stronger behind a wall of encrypted energy.",
        author: "Michael J. Saylor"
    },
    {
        content: "Bitcoin, in the short or even long term, may turn out be a good investment in the same way that anything that is rare can be considered valuable. Like baseball cards. Or a Picasso.",
        author: "Andrew Ross Sorkin",
    },
    {
        content: "At its core, bitcoin is a smart currency designed by very forward-thinking engineers. It eliminates the need for banks, gets rid of credit card fees, currency exchange fees, money transfer fees, and reduces the need for lawyers in transitions... all good things.",
        author: "Peter Diamandis",
    },
    {
        content: "When the Internet first launched, you had all these newspapers saying that the Internet was only used by bad people, to do bad things and what was the point of it. But the Internet changed everything, just like Bitcoin will.",
        author: "Brock Pierce",
    },
    {
        content: "Once people see Bitcoin and how it works, they realise this isn't just a flash in the pan.",
        author: "Roger Ver",
    },
    {
        content: "With great ideas come great changes. Bitcoin's that.",
        author: "Cameron Winklevoss",
    },
    {
        content: "That was the moment I wanted to use bitcoin: when I saw Harriet Tubman on a $20 bill. It's like, when you see all the slave movies, it's like, why you gotta keep reminding us about slavery? Why don't you put Michael Jordan on a $20 bill?",
        author: "Candace Owens",
    },
    {
        content: "We will never hear about people's Bitcoin accounts being frozen or seized by a government agency.",
        author: "Roger Ver",
    },
    {
        content: "Bitcoin as an asset class is brilliant, as a means of payment, fantastic.",
        author: "Max Keiser",
    },
    {
        content: "Bitcoin frees people from trying to operate in a modern market economy.",
        author: "Timothy C. Draper",
    },
    /*{
        content: "Bitcoin is both disruptive from a technology perspective, but there's a tremendous power of social good behind it. So you can both build a cool business or have a great investment return, and there's the promise of potentially improving the remittance industry or banking the unbanked.",
        author: "Cameron Winklevoss",
    },*/
    /*{
        content: "It is one thing to think gold has some marvelous store of value because man has no way of inventing more gold or getting it very easily, so it has the advantage of rarity. Believe me, man is capable of somehow creating more bitcoin... They tell you there are rules and they can't do it. Don't believe them.",
        author: "Charlie Munger",
    },*/
    {
        content: "Bitcoin is great as a form of digital money, but its scripting language is too weak for any kind of serious advanced applications to be built on top.",
        author: "Vitalik Buterin",
    },
    {
        content: "Who would want one's children growing up buying things like bitcoin? I hope to God my family doesn't buy it. It's noxious poison.",
        author: "Charlie Munger",
    },
    {
        content: "This Bitcoin currency is a voluntary decentralized currency, anonymous. It can't be shut down by anyone; there are no central servers.",
        author: "Jeff Berwick",
    },
    {
        content: "As money, Bitcoin achieves two objectives; it's both a unit of transaction as well as being a store of value. The U.S. dollar, for example, is a unit of transaction, but it is not a store of value.",
        author: "Max Keiser",
    },
    {
        content: "What Bitcoin started is metamorphosing into something bigger: a 'crypto-tech'-driven economy with its own value creation, not unlike the Web's own economy. Welcome to the cryptoconomy.",
        author: "William Mougayar",
    },
    {
        content: "If you like gold, there are many reasons you should like Bitcoin.",
        author: "Cameron Winklevoss",
    },
    {
        content: "Bitcoin is amazingly transformative because it's the first time in the entire history of the world in which anybody can now send or receive any amount of money, with anyone else, anywhere on the planet, without having to ask permission from any bank or government.",
        author: "Roger Ver",
    },
    {
        content: "Bitcoin is like anything else: it's worth what people are willing to pay for it.",
        author: "Stanley Druckenmiller",
    },
    /*{
        content: "Because the supply of Bitcoin is limited, the price of Bitcoin is going to have to increase and increase very substantially over time. My advice is that if you're interested in Bitcoin and excited by Bitcoin, then buy some Bitcoin and hold onto them, and you're likely to do very well over time.",
        author: "Roger Ver",
    },*/
    {
        content: "Think of Bitcoin as a bank account in the cloud, and it's completely decentralized: not the Swiss government, not the American government. It's all the participants in the network enforcing.",
        author: "Naval Ravikant",
    },
    {
        content: "We must continue to educate the masses and encourage savings in Bitcoin to truly drain the kleptocratic swamp ruling our financial system.",
        author: "Max Keiser",
    },
    {
        content: "We see bitcoin as potentially the greatest social network of all.",
        author: "Tyler Winklevoss",
    },
    {
        content: "Like the Internet, Bitcoin will change the way people interact and do business around the world.",
        author: "Erik Voorhees",
    },
    {
        content: "We see bitcoin as potentially the greatest social network of all.",
        author: "Tyler Winklevoss",
    },
    {
        content: "Like the Internet, Bitcoin will change the way people interact and do business around the world.",
        author: "Erik Voorhees",
    },
    {
        content: "Bitcoins are like gold bars with wings. That is why I, and so many others, view bitcoin and its network as gold 2.0.",
        author: "Tyler Winklevoss",
    },
    {
        content: "There is nothing that Bitcoin can do which Ethereum can't. While Ethereum is less battle-tested, it is moving faster, has better leadership, and has more developer mindshare.",
        author: "Fred Ehrsam",
    },
    /*{
        content: "Bitcoin and other cryptocurrencies are a form of money that's a stable field that the government can't destroy and can't distort. Because its creation is governed by the laws of mathematics. It can't happen any faster or slower than a certain rate, and it all sort of self-adjusts.",
        author: "Patrick M. Byrne",
    },*/
    {
        content: "Something like bitcoin is really important because it is not correlated to the rest of the market.",
        author: "Chamath Palihapitiya",
    },
    {
        content: "It's completely reasonable, even if some Bitcoin currency purists wouldn't like it, to have credit and debit card payments denominated in Bitcoin rather than dollars, and net settled on Bitcoin instead of on Fedwire.",
        author: "Nick Szabo",
    },
    /*{
        content: "Well, bitcoin is a currency. Bitcoin has no underlying rate of return. You know, bonds have an interest coupon. Stocks have earnings and dividends. Gold has nothing, and bitcoin has nothing. There is nothing to support the bitcoin except the hope that you will sell it to somebody for more than you paid for it.",
        author: "John C. Bogle",
    },*/
    /*{
        content: "In the aftermath of the oh-so-predictable crash, the Bitcoin fanatics have begun marshaling out excuse after excuse for why this non-investment investment lost so much of its value so fast. One was that hackers attacked some of the exchanges for Bitcoins and crippled it. Really? A hacker can wreck an entire market?",
        author: "Kurt Eichenwald",
    },*/
    {
        content: "Make no mistake - Ethereum would never have existed without Bitcoin as a forerunner. That said, I think Ethereum is ahead of Bitcoin in many ways and represents the bleeding edge of digital currency.",
        author: "Fred Ehrsam",
    },
    {
        content: "Bitcoin is mostly about anonymous transactions, and I don't think over time that's a good way to go. I'm a huge believe in digital currency... but doing it on an anonymous basis I think that leads to some abuses, so I'm not involved in Bitcoin.",
        author: "Bill Gates",
    },
    {
        content: "You have to really stretch your imagination to infer what the intrinsic value of Bitcoin is. I haven't been able to do it. Maybe somebody else can.",
        author: "Alan Greenspan",
    }
];

module.exports = {
    quotes
};