import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search,setSearch] = useState("india")
    const [newsData, setNewsData] = useState([])

    const API_KEY ="325b627852fa43f2863176eab3a7590f";
    
    const getData =async()=>{
          const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
          const jsonData = await res.json();
          console.log(jsonData.articles)
          setNewsData(jsonData.articles)
    }

    useEffect(()=>{
        getData()
    },[])

    const handleInput = (e) =>{
         console.log(e.target.value);
         setSearch(e.target.value)
    }

    const userInput=(e) =>{
        setSearch(e.target.value)
    }

  return (
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul>
                <a>All News</a>
                <a>Trending</a>
            </ul>
            <div className='searchBar'>
                <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                <button onClick={getData}>Search</button>
            </div>
        </nav>
        
        <div>
            <p className='head'>Stay Updated with Trendy News</p>
        </div>
        <div className = 'categoryBtn'>
             <button onClick={userInput} value="sports">Sports</button>
             <button onClick={userInput} value="politics">Politics</button>
             <button onClick={userInput} value="entertainment">Entertainment</button>
             <button onClick={userInput} value="health">Health</button>
             <button onClick={userInput} value="fitness">Fitness</button>
        </div>
        <div>
           {newsData ? <Card data={newsData} /> : null}
        </div>
    </div>
  )
}

export default Newsapp
