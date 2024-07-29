import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface CardProps {
  id: number;
  image: string;
  title: string;
  summary: string;
  tags: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, summary, tags, date }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardDate>{date}</CardDate>
        <CardTags>{tags}</CardTags>
        <CardTitle>{title}</CardTitle>
        <CardSummary><div dangerouslySetInnerHTML={{ __html: summary }} /></CardSummary>
      </CardContent>
      <CardFooter>
        <ReadMoreLink to={`/post/${id}`}>Leia mais →</ReadMoreLink>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem;
  max-width: 320px;
  height: 90%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
`;

const CardContent = styled.div`
  flex: 1;
  padding: 1rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
`;

const CardDate = styled.p`
  color: #888;
  font-size: 0.8rem;
  margin: 0;
`;

const CardTags = styled.p`
  color: #888;
  font-size: 0.8rem;
  margin: 0;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const CardSummary = styled.p`
  font-size: 1rem;
  color: #444;
  flex: 1;
  margin: 0;
  margin-block-end: 0em !important;

`;

const CardFooter = styled.div`
  padding: 0 2rem 2rem 0;
  text-align: right;
  width: 100%;
`;

const ReadMoreLink = styled(Link)`
  color: var(--laranja);
  text-decoration: none;
  font-weight: bold;
  margin: 0 1.5rem;

  &:hover {
  }
`;
