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
    <Col xs={12} md={4}>
    <Card>
      <Card.Img variant="top" src={article.imageUrl}/>
      <Card.Body>
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

