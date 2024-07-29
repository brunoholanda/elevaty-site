import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import * as S from './Styles';
import { Button } from '../../components/Button/Styles';

interface Post {
  id: number;
  title: string;
  image: string;
  summary: string;
  description: string;
  tags: string;
  project_link: string;
  repo_link: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

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

  const deletePost = async (postId: number) => {
    try {
      const token = localStorage.getItem('authToken');
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);

      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o post');
      }

      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Erro ao excluir o post:', error);
      alert('Erro ao excluir o post');
    }
  };

  return (
    <div>
      <S.Page>
        <h1>Painel do Operador</h1>
        <p>Aqui é possível adicionar, remover ou alterar projetos</p>
        <Button onClick={() => navigate('/edit/new')}>Adicionar Post</Button>
      </S.Page>
      {posts.map((post, index) => (
        <S.Postagem key={index}>
          <h2><strong>Título:</strong> {post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p><strong>Resumo:</strong></p>
          <div dangerouslySetInnerHTML={{ __html: post.summary }} />
         
          <strong>Postagem Completa</strong>
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
          <p><strong>Tags:</strong> {post.tags}</p>
          <a href={post.project_link} target="_blank" rel="noreferrer noopener">Link do Projeto</a>
          <a href={post.repo_link} target="_blank" rel="noreferrer noopener">Link do Repositório</a>
          <S.PostagemBotoes>
            <Button onClick={() => navigate(`/edit/${post.id}`)}>Editar</Button>
            <Button onClick={() => deletePost(post.id)}>Excluir</Button>
          </S.PostagemBotoes>
        </S.Postagem>
      ))}
    </div>
  );
};

export default Posts;
