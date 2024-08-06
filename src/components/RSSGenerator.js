import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import { Builder } from 'xml2js';

const RSSGenerator = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const generateRSSFeed = () => {
        const feedItems = data.map(post => ({
            title: post.title,
            link: `https://yourwebsite.com/post/${post.id}`,
            description: post.body,
            pubDate: new Date().toUTCString()
        }));

        const rssFeed = {
            rss: {
                $: { version: '2.0' },
                channel: [
                    {
                        title: 'Your RSS Feed',
                        link: 'https://yourwebsite.com',
                        description: 'Latest updates from your site',
                        item: feedItems
                    }
                ]
            }
        };

        const builder = new Builder();
        return builder.buildObject(rssFeed);
    };

    const downloadRSSFeed = () => {
        const rssFeed = generateRSSFeed();
        const blob = new Blob([rssFeed], { type: 'application/rss+xml' });
        saveAs(blob, 'rss.xml');
    };

    return (
        <div>
            <h1>RSS Feed Generator</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <button onClick={downloadRSSFeed}>Download RSS Feed</button>
            )}
        </div>
    );
};

export default RSSGenerator;

