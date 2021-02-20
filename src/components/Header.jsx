import React, { Component } from 'react'
import {Button} from 'reactstrap'

import NewsCategory from './news/index'


 class Header extends Component {
     state={
         searchTerm: '',
     }

     handleChange= e => {
         //TODO 
        this.setState({searchTerm: e.target.value})
     }
     handleKeyPress= () => {
         //Todo
     }
    render() {
        const {category, changeCategory} = this.props
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{fontWeight:'300'}}> Block Buster News</h1>
                <input 
                    type='search'
                    className='form-control'
                    placeholder='Search Latest News'
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className='my-4'>
                    {NewsCategory && Object.keys(NewsCategory).map(item => {
                      return  category === NewsCategory[item] ?  <Button onClick={() => changeCategory(NewsCategory[item])} className='btn btn-warning btn-sm mr-2 mb-2'>{NewsCategory[item]}</Button> : <Button onClick={() => changeCategory(NewsCategory[item])} className='btn btn-sm btn-light mr-2 mb-2'>{NewsCategory[item]}</Button>
                    })}
                </div>
            </div>
        )
    }
}
export default Header