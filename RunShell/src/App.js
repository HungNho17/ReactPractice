import React, { Component } from 'react';
import ButtonComp from './components/button';
import LoadingComp from './components/loading';
import NewsItemComp from './components/newsItem';

class App extends Component {
  render() {
    return (
      <div> 
        <h1> 
          Hello Hung nho!
          <br/> 
        </h1>
        <ButtonComp />
        <LoadingComp />
        <NewsItemComp />
      </div>
    );
  }
}
 
export default App;
