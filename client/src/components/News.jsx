/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable indent */
import React, {useState, useEffect} from "react";
import "../index.css";
import "./News.css";

const News = () => {
    const [news,setNews] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5b5487f715mshfd5e195575f9544p1e2572jsn7cde575f3acd',
                'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
            }
        }; 
        fetch('https://crypto-news16.p.rapidapi.com/news/coindesk', options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setNews(response);
            })
            .catch(err => console.error(err));
        // setNews([
        //     { 
        //         date: "Tue, 18 Apr 2023 17:34:14 +0000", 
        //         description: "The queue stood at 14 days late last week, but it’s lengthened as more exit requests piled in from validators on the blockchain.  Also, staked ether deposits outpace withdrawals for the first time since last week’s Shanghai upgrade.", 
        //         title: "If Crypto OGs Are Being Hacked, Where Does That Leave the Rest of Us?",
        //         url: "https://www.coindesk.com/consensus-magazine/2023/04/18/if-crypto-ogs-are-being-hacked-where-does-that-leave-the-rest-of-us/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
        //     },
        //     { 
        //         date: "Tue, 18 Apr 2023 17:34:14 +0000", 
        //         description: "The queue stood at 14 days late last week, but it’s lengthened as more exit requests piled in from validators on the blockchain.  Also, staked ether deposits outpace withdrawals for the first time since last week’s Shanghai upgrade.", 
        //         title: "If Crypto OGs Are Being Hacked, Where Does That Leave the Rest of Us?",
        //         url: "https://www.coindesk.com/consensus-magazine/2023/04/18/if-crypto-ogs-are-being-hacked-where-does-that-leave-the-rest-of-us/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
        //     },
        //     { 
        //         date: "Tue, 18 Apr 2023 17:34:14 +0000", 
        //         description: "The queue stood at 14 days late last week, but it’s lengthened as more exit requests piled in from validators on the blockchain.  Also, staked ether deposits outpace withdrawals for the first time since last week’s Shanghai upgrade.", 
        //         title: "If Crypto OGs Are Being Hacked, Where Does That Leave the Rest of Us?",
        //         url: "https://www.coindesk.com/consensus-magazine/2023/04/18/if-crypto-ogs-are-being-hacked-where-does-that-leave-the-rest-of-us/?utm_medium=referral&utm_source=rss&utm_campaign=headlines",
        //     },

        // ]);
    },[])
  return (
    <div className="min-h-screen main-container">
      <h2 className="news-title">Trending Crypto news</h2>
      {news.length === 0 ?
        <p className="loading-text">Loading...</p> :
        <div className="news-items">
            {news.map((newsItem, index) => 
            <div className="news-item-container" key={index}>
                <p className="news-item-header"><a href={newsItem['url']} className="news-item-title">{newsItem['title']}</a> <span className="news-item-date">{newsItem['date']}</span></p>
                <p className="news-item-description">{newsItem['description']}...</p>
            </div>)}
        </div>}
    </div>
  );
};

export default News;
