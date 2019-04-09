import React from 'react';
import ItunesSelector from '../Components/ItunesSelector';
import ItunesDetail from '../Components/ItunesDetail';


class ItunesContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itunes: [],
            selectedItunes: null
        };
        this.handleItunesSelected = this.handleItunesSelected.bind(this)
    }

    componentDidMount(){
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({itunes: data.results}))
    }

    handleItunesSelected(index){
        const itunesSelector = this.state.itunes[index];
        this.setState({selectedItunes: itunesSelector})
        const url = 'https://itunes.apple.com/gb/rss/topsongs/'+index+'/'
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({selectedItunes :data}))

    }

    render(){
        return(
            <div>
                <h2>
                Itunes Container
                </h2>
                <ItunesSelector itunes={this.state.itunes}
                handleSelected={this.handleItunesSelected} />
                <ItunesDetail itune={this.state.selectedItunes} />
            </div>
        )
    } 
}

export default ItunesContainer;