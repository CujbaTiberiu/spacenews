import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Articles } from '../interfaces/Articles';
import {Col} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

interface ArticleProp {
    article : Articles
}


const ArticleCard = ({article}:ArticleProp) => {

    const navigate = useNavigate()

    const getFirstEightWords = (text: string) => {
        const words = text.split(' ');
        return words.slice(0, 8).join(' ');
      };

  return (
    <Col xs={12} md={3}  className="my-4">
    <Card className='single__card'>
      <Card.Img variant="top" src={article.imageUrl}/>
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {getFirstEightWords(article.summary)+ '...'}
        </Card.Text>
        <Button variant="outline-primary" onClick={() => navigate('/details/' + article.id)}>See more</Button>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ArticleCard;

