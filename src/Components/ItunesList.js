import React from 'react';
import ItunesDetail from './ItunesDetail';

const ItunesList = (props) =>{
    const details = props.itunes.map((itune, index) =>{
    return <ItunesDetail position={index + 1} key={index} itune={itune}/>
})

return(
    <div className="Itunes-list">
            {details}
    </div>
)

}

export default ItunesList;

