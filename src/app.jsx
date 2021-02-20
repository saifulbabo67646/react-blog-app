import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Header from './components/Header.jsx'

import News, {newsCategory} from './components/news/index'
import NewsList from './components/NewsList'
import Pagination from './components/Pagination'
import Spinner from './components/Spinner'

const axios = require('axios');


const api = '9b99256cd2e64b17911aa7835644e49d'

class App extends React.Component{

    state={
        news: [],
        category: newsCategory.technology,
    }
    // all the asynchronous function will do here in componentDidMount
    componentDidMount(){
        const newses = new News(newsCategory.technology)
        newses.getNews()
            .then(data => console.log(data))
    }

    componentDidUpdate(prevProps, prevState){
        // if(prevState.category !== this.state.category){
        //     this.getApiRequest()
        // }
    
    }
    // getApiRequest = () => {
    //         const url = `${process.env.REACT_APP_BASE_URL}?apiKey=${process.env.REACT_APP_API_KEY}&category=${this.state.category}&pagesize=5`
    //         axios.get(url)
    //         .then(response => this.setState({news: response.data.articles}))
    //         .catch(error => console.log(error))
    // }

    changeCategory = category => {
        this.setState({category})
    }
    
    render(){
        
        return(
            <>
             <Container>
                <Header 
                    category={this.state.category}
                    changeCategory = {this.changeCategory}
                />
                <div className='d-flex'>
                    <p className='text-black-50'>
                        About {0} result found
                    </p>
                    <p className='text-black-50 ml-auto'>
                        {1} page of {100}
                    </p>
                </div>
                <NewsList news={this.state.news} />
                <Pagination />
                <Spinner />
             </Container>
            </>
        )
    }
}
export default App


