import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Landing, Blog, AI, FAQS, About, Contact, NotFound, BlogDetail } from './containers';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='main'>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/blogdetail/:id">
              <BlogDetail />
            </Route>
            <Route path="/ai">
              <AI />
            </Route>
            <Route path="/faqs">
              <FAQS />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App