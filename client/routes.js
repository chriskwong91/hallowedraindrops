import React from 'react';
// other pages such as home-page
// other pages such as signup-page
// other pages such as interviewer page
// other pages such as profile page
import NoMatch from './app/NoMatch.jsx';
// import Index from './app/index.jsx';
import Editor from './app/editor.jsx';
import Home from './app/home.jsx';
import Admin from './app/Admin/Admin.jsx';
import App from './app/App.jsx';
import ChallengeForm from './app/Admin/ChallengeForm.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Blog from './app/blog-component/blog.jsx';
import Blogger from './app/blog-component/blogger.jsx';

// an admin page
import BlogCreator from './app/blog-component/blog-creator/blog-creator.jsx';

// bootstrap: https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970#.yd8htlxw0
import ChallengeSplash from './app/challengeSplash.jsx';
import ChallengeInfo from './app/components/ChallengeInfo.jsx';
import ChallengeTechnical from './app/components/ChallengeTechnical.jsx';
import ChallengeSubmit from './app/components/ChallengeSubmit.jsx';

import How from './app/howItWorks.jsx';

//*********** We need an App.jsx

import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

// need a correct way to route to blog

export default <Route path="/" component={App}>
     <IndexRoute component={Home}></IndexRoute>
      <Route path ="/editor/:editorid" component={Editor} />
      <Route path ="admin" component={Admin}>
        <Route path="addchallenge" component={ChallengeForm} />
        <Route path="*" component={NoMatch} />
      </Route>
      <Route path ="home" component={Home} />
      <Route path ="blog" component={Blog} />
      <Route path ="blog/:bloggername" component={Blogger} />
      <Route path ="create-blog" component={BlogCreator} />
      <Route path ="splash" component = {ChallengeSplash} />
      <Route path ="howitworks" component = {How} />
      <Route path ="/challenge/splash" component = {ChallengeSplash} />
      <Route path ="/challenge/info" component = {ChallengeInfo} />
      <Route path ="/challenge/technical" component = {ChallengeTechnical} />
      <Route path ="/challenge/submit" component = {ChallengeSubmit} />
     <Route path ="*" component={NoMatch}/>
   </Route>

