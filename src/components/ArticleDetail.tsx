import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SingleArticle } from '../interfaces/SingleArticle';



function ArticleDetail() {

    const params = useParams()
    console.log(params)

    const [article, setArticle] = useState<SingleArticle[]>([])
    const API_KEY = `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`

    const fetchArticles = async () => {
        try {
          let response = await fetch(
            API_KEY
          )
          if (response.ok) {
            let data = await response.json()
            console.log(data)
            setArticle(data)
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




  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleDetail;

