import React from 'react';
import ItunesList from '../Components/ItunesList';


class ItunesContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itunes: null,
           
        };
        
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({itunes: data.feed.entry}))
    }


    render(){
        if(!this.state.itunes) return null
        return(
            <div>
                <h2>
                Itunes Container
                </h2>
                <ItunesList itunes={this.state.itunes}/>
            
            </div>
        )
    } 
}

export default ItunesContainer;