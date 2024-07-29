import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../config';
import styled from 'styled-components';
import Card from '../Card';

interface Post {
  id: number;
  title: string;
  image: string;
  summary: string;
  description: string;
  tags: string;
  created_at: string; // assuming your API returns the creation date
}

const Cards: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error('Erro ao obter os posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Erro ao obter os posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <CardsContainer>
      {posts.map((post) => (
        <Card
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
          summary={post.summary}
          tags={post.tags}
          date={new Date(post.created_at).toLocaleDateString()}
        />
      ))}
    </CardsContainer>
  );
};

export default Cards;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0rem;

  }
`;
