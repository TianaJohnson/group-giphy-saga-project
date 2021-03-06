import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchResultsItem from './SearchResultsItem';

class SearchResults extends Component {
   
    appendToDOM =() => {
        
        
        return this.props.reduxStore.searchList.map((result)=>{     
            return <SearchResultsItem key={result.id}result={result}/>                             
        })
        
    }
    
    render(){
        return (
            <div>
                {this.appendToDOM() }
            </div>
        );
    }
}

const mapStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapStoreToProps)(SearchResults);