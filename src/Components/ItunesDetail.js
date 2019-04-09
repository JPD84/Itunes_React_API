import React from 'react';

const ItunesDetail = (props) => {
    if (!props.itune) return null;
    return(
        <div>
        <h3>
            Chart Position: {props.itune.name}
        </h3>
            <h3>
                Title: {props.itune.name}
            </h3>
        <h3>
            Artist: {props.itune.name}
        </h3>
    </div>

    )
    
}

export default ItunesDetail;