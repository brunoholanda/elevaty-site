import React, { useState, useEffect } from 'react';
import * as S from './Styles';
import { BASE_URL } from '../../../config';
import { Button } from '../../../components/Button/Styles';
import Cards from '../../../components/Cards';

interface Post {
  id: number;
  date: string;
  category: string;
  title: string;
  summary: string;
  image: string;
}

const BlogPosts: React.FC = () => {
    //@ts-ignore
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
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

    fetchPosts();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <h2>Nossas Últimas Novidades</h2>
        <Button>Ver todas as postagens</Button>
      </S.Header>
      <S.Content>
        <Cards />
        {/*
        <S.SidePosts>
          {posts.slice(2).map(post => (
            <S.SidePost key={post.id}>
              <img src={post.image} alt={post.title} />
              <S.SidePostInfo>
                <S.PostDate>{post.date}</S.PostDate>
                <S.PostCategory>{post.category}</S.PostCategory>
                <S.PostTitle>{post.title}</S.PostTitle>
              </S.SidePostInfo>
            </S.SidePost>
          ))}
        </S.SidePosts>
        */}
      </S.Content>
    </S.Container>
  );
};

export default BlogPosts;

