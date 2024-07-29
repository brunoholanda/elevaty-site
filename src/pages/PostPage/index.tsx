import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BASE_URL } from '../../config';
import Cards from '../../components/Cards';

interface Post {
  id: number;
  image: string;
  title: string;
  summary: string;
  description: string;
  tags: string;
  date: string;
}

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`);
        if (!response.ok) {
          throw new Error('Erro ao obter o post');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Erro ao obter o post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <PostImage src={post.image} alt={post.title} />
      <PostContent>
        <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
        <PostTags>{post.tags}</PostTags>
        <PostTitle>{post.title}</PostTitle>
        <PostBody><div dangerouslySetInnerHTML={{ __html: post.description }} /></PostBody>
      </PostContent>
      <PostTitle>Outras postagens</PostTitle>
      <Cards />
    </Container>
  );
};

export default PostPage;

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 5rem;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const PostContent = styled.div`
  padding: 2rem 0;
`;

const PostDate = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

const PostTags = styled.p`
  color: #888;
  font-size: 0.9rem;
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  margin: 0.5rem 0;
`;


const PostBody = styled.div`
  font-size: 1rem;
  color: #333;
`;
