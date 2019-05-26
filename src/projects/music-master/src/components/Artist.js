import React from 'react';

const Artist = ({artist}) => {
    if (!artist) return null;
    
    const{images,name,followers,genres} = artist;

    return (
        <div>
            <br/><br/>
            <h4>{name}</h4>
            <img src={images[0] && images[0].url} alt='artist profile' 
            style = {{
                width: 250,
                height: 250,
                borderRadius: 125,
                objectFit: 'cover'
            }} />
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            
        </div>
    )
}

export default Artist;