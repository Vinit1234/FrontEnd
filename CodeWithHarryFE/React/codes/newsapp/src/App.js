import logo from './logo.svg';
import './App.css';

// import React, { Component } from 'react'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  // createBrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
import Navbar2 from './components/Navbar2';
import News2 from './components/News2';


// export default class App extends Component {
const App = ()=>{
  const pageSize=15;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  // state={
  //   progress:0
  // }
  const [progress, setProgress] = useState(0);
  // const setProgress = (progress)=>{
  //   this.setState({
  //     progress:progress
  //   });
  // }
  // render() {
    return (
      <div>
        <Router>
          {/* <Navbar/> */}
          <Navbar2/>
          <LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
            />
          {/* <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business"/>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health"/>}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science"/>}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports"/>}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology"/>}></Route>
          </Routes> */}
          <Routes>
            <Route exact path='/' element={<News2 setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
            <Route exact path='/business' element={<News2 setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
            <Route exact path='/entertainment' element={<News2 setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
            <Route exact path='/health' element={<News2 setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
            <Route exact path='/science' element={<News2 setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
            <Route exact path='/sports' element={<News2 setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
            <Route exact path='/technology' element={<News2 setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
// }


export default App;