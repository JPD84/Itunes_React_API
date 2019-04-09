import React from 'react';

const ItunesSelector = (props) =>{

    const options = props.itunes.map((itune, index) =>{
        return <option value={index} key={index}>{itune.name}</option>

    })

    function handleChange(event){
        props.handleSelected(event.target.value);
    }

    return(
        <select id="itune-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a Song</option>
        {options}
        </select>
    )
}

export default ItunesSelector;