import { useState } from "react"
import { Articles } from "../interfaces/Articles"
import { useEffect } from "react"
import ArticleCard from "./ArticleCard"
import { Container, Row } from "react-bootstrap"

const Homepage = () => {

    const [articles, setArticles] = useState<Articles[]>([])
    const API_KEY = `https://api.spaceflightnewsapi.net/v3/articles`

    const fetchArticles = async () => {
        try {
          let response = await fetch(
            API_KEY
          )
          if (response.ok) {
            let data = await response.json()
            console.log(data)
            // data è l'array di libri
            setArticles(data)
          } else {
            alert('response NOT ok')
          }
        } catch (error) {
          console.log('error', error)
        }
      }
    
      useEffect(() => {
        fetchArticles()
      }, [])


    return(
        <>
        <h1 className="pt-4 text-light">Main Articles</h1>
       <Container>
        <Row className="g-2 justify-content-center">
           {
               articles.map((article) => (
                   <ArticleCard article = {article} key={article.id} />
               ))
           }
        </Row>
        </Container> 
        </>

    )
}

export default Homepage