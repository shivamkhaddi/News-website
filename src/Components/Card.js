import React from 'react'

const Card = ({data}) => {
    console.log(data);


    return (
        <div className='cardContainer'>
            {data.map((v, i) => {
                if(!v.urlToImage){
                    return null
                }else{
                return(
                <div className='card' key={i}>
                    <img src={v.urlToImage} alt={v.title || 'Card image'} />
                    <div className='content'>
                        <a className='title' href={v.url} target="_blank" rel="noopener noreferrer"> 
                            {v.title}
                        </a>
                        <p>{v.description}</p>
                        <button onClick={()=>window.open(v.url)}>Read More</button>
                    </div>
                </div>
                )
            }    
            })}
        </div>
    );
};

export default Card;
