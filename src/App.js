
import './App.css';
import {useEffect,useState} from 'react';
import News from './News';


function App() {

let [articles, setArticles] = useState([]); 

let [category,setCategory] = useState("india");

useEffect(()=> {

fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-26&apiKey=1f0547f671544695a3b017deffd54897`)

.then((response)=> response.json())

.then((news) => {
  setArticles(news.articles);
  console.log(news.articles);
})

.catch((err) => {
  console.log(err)
})

}, [category]) 



  return (
    <div className="App">
    
      <header className='header'>
     
      <h1>News Today</h1>
     
      <input type="search" onChange={(event)=>{

        if (event.target.value!=="") 
        {
          setCategory(event.target.value);
        }
        else{
          setCategory("india")
        }
      }}  
         
         placeholder='Search News'
      />
     
      </header> 
     

    <section className='news-aricles'>
   
   {
    articles.length !== 0 ? articles.map((article) => {
    
      return 
      <News  article={article} />
    }): <h3>No News Found For Your Search</h3>
   }
    
    </section>
    
    </div>
  );
}

export default App;
