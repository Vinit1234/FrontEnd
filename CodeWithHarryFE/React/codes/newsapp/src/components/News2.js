// import React, { Component } from "react";
import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import NewsItem2 from "./NewsItem2";

// Function based component
const News2 =(props) => {

  // Add defaultProps and propType at the end
    // static defaultProps={
    //     country:"us",
    //     pageSize:8,
    //     category:"general"
    //   }
    
    //   static propType={
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,
    //   }
    
 const [articles, setArticles] = useState([]);
 const [loading, setLoading] = useState(true);
 const [page, setPage] = useState(1);
 const [totalResults, setTotalResults] = useState(0);
 
  const capitalizeFirstLetter = (string)=>{
    return string[0].toUpperCase()+string.slice(1)
  }

  /* constructor(props) {
    super(props);
    console.log(">> NewsItem constructor called");
    this.state = {
      // articles: this.articles,
      articles: [],
      // loading: false,
      loading: true,
      page:1,
      totalResults:0
    };
    document.title= this.capitalizeFirstLetter(this.props.category) +" - NewsMonkey";
  } */

  // Refactoring repeated code in single function

  // async updateNews(){
  const updateNews = async ()=>{
    props.setProgress(10);

// Replace all this.props to props
// Remove this.state. 
// Replace all this.setState() to individual set states

//     let url =
// `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let url =
`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

    // this.setState({loading:true});
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);

    // Replace the following:
    /* this.setState({
      articles:parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    }); */

    // With:
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    console.log(parsedData);
    props.setProgress(100);

  }

  // Fetch data from news api and populate state
  // Replace componentDidMount() by useEffect()
  /* async componentDidMount() {
    this.updateNews();
  } */
 useEffect(() => {
  document.title= capitalizeFirstLetter(props.category) +" - NewsMonkey";
  updateNews();
  }, [])
 

 const handlePrevClick = async ()=>{
    console.log(">> handlePrevClick");
      /* this.setState({
      page:--page,
    }); */
    this.setPage(--page);
    // this.updateNews();
  }

 const handleNextClick = async ()=>{
    console.log(">> handleNextClick");
    // if(this.state.page+1> Math.ceil(this.state.totalResults/20)){

    // }
    // else{
    if(!(page+1> Math.ceil(totalResults/props.pageSize))){
          /* this.setState({
          page:++page,
        }); */
        setPage(++page);

        // this.updateNews();
  } 

  }


  // for infinite scroll
  const fetchMoreData = async () => {
    // this.setState({page: page+1});
    
    // page doesn't always get updated in the url as setPage() is asynchronous
    // hence add page+1 to url itself and then setPage(page+1)
    // setPage(page+1);

    // this.updateNews();
    let url =
// `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    // this.setState({loading:true});
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    /* this.setState({
      articles:articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading:false
      }); */
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
  };

  // render() {
    return (
      <>
       {/* <div className="container my-3"> */}
        {/* <h2 className="text-center" style={{margin:'35px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(props.category)} Headlines</h2> */}
        <h2 className="text-center" style={{margin:'35px 0px', marginTop:"90px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner/>}

             
        {/* Add react infinite scroll after installing */}
        <InfiniteScroll
          // dataLength={this.state.items.length}
          dataLength={articles.length}
          next={fetchMoreData}
          // hasMore={true}
          hasMore={articles.length < totalResults}
          // hasMore={this.state.articles.length !==0 }
          // loader={<h4>Loading...</h4>}
          loader={<Spinner/>}
        >
        <div className="container">
            <div className="row">
              { articles.map((element,index) => {
                return (
                  // <div key={element.url} className="col-md-4">
                  <div key={index} className="col-md-4">
                    <NewsItem2
                      title={element.title? element.title.slice(0, 45):""}
                      description={element.description?element.description.slice(0, 88):""}
                      imageUrl={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/ab06/live/bf46bec0-6966-11ef-ae46-19f76aad857d.jpg"}
                      newsUrl={element.url}
                      author={element.author} date={element.publishedAt}
                      source={element.source.name}
                      category={props.category}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
          {/* Bootstrap flex */}
          <div className="container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
            <button disabled={page+1> Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
          </div>

      </>
    );
  }
// }

News2.defaultProps={
    country:"us",
    pageSize:8,
    category:"general"
  }

News2.propType={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

export default News2;
