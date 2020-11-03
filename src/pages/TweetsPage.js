import React from 'react';

import TweetForm from '../components/TweetForm';
import Tweets from '../components/Tweets';


const TweetsPage = () => (
    <div className="dashboard-container">
        <TweetForm />
        <Tweets />
    </div>
);

export default TweetsPage;