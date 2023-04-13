import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SingleArticle } from '../interfaces/SingleArticle';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/articledetail.css'

// interface ArticleProp {
//     article : SingleArticle
// }



function ArticleDetail() {

    const params = useParams()
    console.log(params)
    const navigate = useNavigate()

    const [article, setArticle] = useState<SingleArticle |null>(null)
    const API_KEY = `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`

    const fetchArticle = async () => {
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
        fetchArticle()
      }, [])




  return (
    <div className='bkr'>
    <Container>
        <Row className='justify-content-center'>
        <Col xs={10} md={8} >
          {article &&
    <Card className='mt-5'>
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
            <div>
          {article.summary}
          </div>
          <div>
            See full article <a href={article.url}>{article.newsSite}</a>
          </div>
        </Card.Text>
        <Button variant="outline-primary"  onClick={() => navigate('/')}>Go Back</Button>
      </Card.Body>
    </Card>
    }
    </Col>
    </Row>
    </Container>
    </div>
  );
}

export default ArticleDetail;

