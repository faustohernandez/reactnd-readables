import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import HomeContainer from './containers/home';
import CategoryViewContainer from './containers/categoryView';

import CreatePost from './components/create'
import PostDetailsContainer from './containers/postDetails'
import HomeNav from './components/homenav'

const Layout = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      (
        <div>
          <HomeNav/>
          <Component {...props} />
        </div>
      )
      )}
  />
);

const routes = () => (
  <Router>
    <Switch>
      <Layout exact path="/" component={HomeContainer}/>
      <Layout path="/category/:id" component={CategoryViewContainer}/>
      <Layout exact path="/create" component={CreatePost}/>
      <Layout path="/post/:id" component={PostDetailsContainer}/>
    </Switch>
  </Router>
);

export default routes;