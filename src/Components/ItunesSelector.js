import React from 'react';

const ItunesSelector = (props) =>{
    console.log(props.itunes)

    const options = props.itunes.map((itune, index) =>{
        console.log(itune)
        return <option value={index} key={index}>{itune['im:name'].label} {itune['im:image'].label}</option>

    })

    const handleChange = (event) =>{
        props.handleSelected(parseInt(event.target.value));
    }

    return(
        <select id="itune-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a Song</option>
        {options}
        </select>
    )
}

export default ItunesSelector;