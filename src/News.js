export default function  News(props) {
  
    console.log(props)

    return (

        <div className="news">

        <div className="news-img">

          {
            props.article.urlToImage !== null?  <img  src={props.article.urlToImage} /> : 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc4ydgp0nVX122uVDmQw26huqCUk1NChzWcg&usqp=CAU"/> 
          }
         
         </div>

        <h1>{props.article.title}</h1>
       
       <p>
        {props.article.description?.substring(0,100).concat("....")}<a href={props.article.url} target="_blank">Read More</a> </p> 

       
       
       <div className="source">

        <p>Author: {props.article.author} </p> 

        <p>Publisher: {props.article.source.name}</p>

       </div>

        </div>
    )
}