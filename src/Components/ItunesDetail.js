import React from 'react';

const ItunesDetail = (props) => {
    if (!props.itune) return null;
    console.log(props.position)
    return (
        <div>
            <h3>
                Chart Position: {props.position}
            </h3>
                <h3>
                    Title: {props.itune['im:name'].label}
                </h3>
                        <h3>
                            Artist: {props.itune['im:artist'].label}
                        </h3>
                    <h3>
                    Single Cover: <img src={props.itune['im:image'][2].label} alt = "cover" />
                </h3>
            <h3>
                Release Date: {props.itune['im:releaseDate'].attributes.label}
            </h3>
        </div>

    )

}

export default ItunesDetail;