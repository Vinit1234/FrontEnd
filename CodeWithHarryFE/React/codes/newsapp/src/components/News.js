import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles= [
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Titanic: Striking images reveal depths of ship's slow decay",
    "description": "A new expedition finds that a large part of the railing at the ship's front has fallen away.",
    "url": "https://www.bbc.co.uk/news/articles/crkm82enkgko",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16e0/live/d75a5540-6901-11ef-8c32-f3c2bc7494c6.jpg",
    "publishedAt": "2024-09-03T06:22:18.5476437Z",
    "content": "The team has also announced another discovery of an artefact they were hoping to find even though it was against all the odds.\r\nIn 1986 a bronze statue called the Diana of Versailles was spotted and … [+887 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Sheikh Hasina poses a Bangladesh conundrum for India",
    "description": "Former Bangladesh PM Sheikh Hasina's continued presence in India means new diplomatic challenges for Delhi.",
    "url": "https://www.bbc.co.uk/news/articles/cg4ypkpx1rqo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/de41/live/dd096640-6922-11ef-8c32-f3c2bc7494c6.jpg",
    "publishedAt": "2024-09-03T06:22:17.2067449Z",
    "content": "The Indian government has wasted no time in reaching out to the interim government in Dhaka, with Prime Minister Narendra Modi holding a telephone conversation with leader Muhammad Yunus.\r\nHowever, i… [+2445 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "US seizes Venezuelan President Nicolás Maduro's plane",
    "description": "US officials say the aircraft was recovered in the Dominican Republic after having been purchased illegally.",
    "url": "https://www.bbc.co.uk/news/articles/cm2np4xl083o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/431a/live/f0c46b10-694c-11ef-b1ff-237e43844635.png",
    "publishedAt": "2024-09-03T05:52:14.8277995Z",
    "content": "The plane appeared to be flown to the Venezuelan capital Caracas after arriving in Kingston in Saint Vincent and the Grenadines in April 2023, according to data held by the Flightradar24 website. \r\nU… [+1510 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Pope Francis embarks on ambitious Asia-Pacific tour",
    "description": "Francis will visit Indonesia, Papua New Guinea, Timor-Leste and Singapore over 11 days.",
    "url": "https://www.bbc.co.uk/news/articles/cm2npr4pg5no",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/a5dd/live/05cb6a50-6997-11ef-b04d-a1e115c95ab0.jpg",
    "publishedAt": "2024-09-03T05:37:14.5464667Z",
    "content": "Parts of Francis's trip, which was originally scheduled in 2020 but postponed due to the pandemic, will retrace the steps of St John Paul II, who also visited the four nations during his 27-year pont… [+3012 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Cathay Pacific grounds planes after engine problem",
    "description": "Airline has found faulty engine parts during an inspection of its fleet of 48 A350 aircraft.",
    "url": "https://www.bbc.co.uk/news/articles/c5yd7w0dzpwo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/300a/live/f1ff8d10-69a2-11ef-bf15-41ffd3dfb033.jpg",
    "publishedAt": "2024-09-03T03:37:12.485923Z",
    "content": "Cathay Pacific said the engine component that caused its plane to return to Hong Kong was \"the first of its type to suffer such failure on any A350 aircraft worldwide.\" \r\n\"Thus far we have identified… [+734 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "South Korea: The deepfake crisis engulfing hundreds of schools",
    "description": "The crisis engulfing more than 500 schools and universities involves many underage victims.",
    "url": "https://www.bbc.co.uk/news/articles/cpdlpj9zn9go",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/25f3/live/ac0d8ec0-6929-11ef-b43e-6916dcba5cbf.jpg",
    "publishedAt": "2024-09-03T00:52:16.1127113Z",
    "content": "Last Saturday, a Telegram message popped up on Heejins phone from an anonymous sender. Your pictures and personal information have been leaked. Lets discuss.\r\nAs the university student entered the ch… [+2412 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Is US economy better now than under Trump?",
    "description": "BBC Verify looks at jobs, inflation, stocks and other indicators to compare the Trump and Biden economies.",
    "url": "https://www.bbc.co.uk/news/articles/c8xl5vnlzpwo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c911/live/561b3350-692e-11ef-8c32-f3c2bc7494c6.jpg",
    "publishedAt": "2024-09-03T00:52:14.6755675Z",
    "content": "Mr Biden claims this is the fastest job growth at any point of any president in all of American history.\r\nThats correct - if you look at the available data since records began in 1939.\r\nBut his admin… [+653 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Israeli outpost settlers rapidly seizing West Bank land",
    "description": "The number of illegal outposts has risen in the past five years to 196, BBC analysis has found.",
    "url": "https://www.bbc.co.uk/news/articles/c207j6wy332o",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/bd4e/live/7df2fd20-662e-11ef-8c32-f3c2bc7494c6.jpg",
    "publishedAt": "2024-09-02T23:22:15.9822417Z",
    "content": "Through limiting access to grazing land, outpost settlers like Moshe Sharvit are able to put Palestinian farmers in increasingly precarious positions, says Moayad Shaaban, the head of the Palestinian… [+1444 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Tim Walz unharmed after motorcade vehicles involved in crash",
    "description": "Some journalists and campaign staff were injured but the candidate for vice-president was not hurt.",
    "url": "https://www.bbc.co.uk/news/articles/cx2n1g4gzypo",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ab06/live/bf46bec0-6966-11ef-ae46-19f76aad857d.jpg",
    "publishedAt": "2024-09-02T22:52:18.8618601Z",
    "content": "It is unclear what caused the crash, which occurred on Interstate 794.\r\nVice-President Kamala Harris, his running mate, phoned Mr Walz to check that he was OK, a White House official told CBS, the BB… [+1362 chars]"
    },
    {
    "source": {
    "id": "bbc-news",
    "name": "BBC News"
    },
    "author": "BBC News",
    "title": "Netanyahu asks Israelis for 'forgiveness' over hostage deaths",
    "description": "It comes as Hamas said more hostages could be \"returned to their families in shrouds\" if a ceasefire isn't reached.",
    "url": "https://www.bbc.co.uk/news/articles/cn02pz4wnyro",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9776/live/45780950-6966-11ef-b43e-6916dcba5cbf.jpg",
    "publishedAt": "2024-09-02T22:52:17.8492032Z",
    "content": "Thousands of Israelis took to the streets on Monday in fresh protests called by hostages' families to express their anger at Mr Netanyahu's failure to bring home their loved ones after almost 11 mont… [+1839 chars]"
    }
    ]

  constructor(){
    super();
    console.log(">> NewsItem constructor called");
    this.state={
      articles:this.articles,
      loading:false
    }
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top headlines</h2>
        <div className="row">
          <div className="col-md-4"><NewsItem title="My Title" description="My Description" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/de41/live/dd096640-6922-11ef-8c32-f3c2bc7494c6.jpg"/></div>
          <div className="col-md-4"><NewsItem/></div>
          <div className="col-md-4"><NewsItem/></div> 
        </div>
        
      </div>
    )
  }
}

export default News
