import React, { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../config';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as S from './Styles';
import { Button } from '../../../components/Button/Styles';

interface Post {
  id: number;
  title: string;
  image: string;
  summary: string;
  description: string;
  tags: string;
}

const EditPost: React.FC = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  //@ts-ignore
  const [post, setPost] = useState<Post | null>(null);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isFormIncomplete, setIsFormIncomplete] = useState(false);

  useEffect(() => {
    if (postId !== 'new') {
      fetchPost();
    }
  }, [postId]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`);
      if (!response.ok) {
        throw new Error('Erro ao obter o post');
      }
      const data = await response.json();
      setPost(data);
      setTitle(data.title);
      setImage(data.image);
      setSummary(data.summary);
      setDescription(data.description);
      setTags(data.tags.split(',').map((tag: string) => tag.trim()));
    } catch (error) {
      console.error('Erro ao obter o post:', error);
    }
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
    setSummary(value.substring(0, 200));
  };

  const handleTagsChange = (value: string) => {
    setTags(value.split(',').map(tag => tag.trim()));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!title || !summary || !description || !tags.length) {
      setIsFormIncomplete(true);
      setTimeout(() => setIsFormIncomplete(false), 5000);
      return;
    }

    const postData = {
      title,
      image,
      summary,
      description,
      tags: tags.join(', '),
    };

    try {
      const token = localStorage.getItem('authToken');
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `Bearer ${token}`);

      if (postId !== 'new') {
        await fetch(`${BASE_URL}/posts/${postId}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify(postData),
        });
      } else {
        await fetch(`${BASE_URL}/posts`, {
          method: 'POST',
          headers,
          body: JSON.stringify(postData),
        });
      }
      navigate('/operador');
    } catch (error) {
      console.error('Erro ao enviar o post:', error);
      alert('Erro ao enviar o post');
    }
  };

  return (
    <S.Page>
      <S.Formulario>
        <h1>{postId === 'new' ? 'Adicionar Novo Post' : 'Editar Post'}</h1>
        {isFormIncomplete && <p className="error">Por favor, preencha todos os campos!</p>}

        <form className='painel' onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="title"
              className={title === '' ? 'required-field' : ''}
              placeholder='Insira o Título do Projeto'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="image"
              className={image === '' ? 'required-field' : ''}
              placeholder='URL da Imagem'
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
         
          <div className='quill-editor'>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Descrição completa do projeto"
            />
          </div>
          <div>
            <textarea
              id="summary"
              className={summary === '' ? 'required-field' : ''}
              placeholder='Resumo do projeto'
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="tags"
              className={tags.length === 0 ? 'required-field' : ''}
              placeholder='Tags (separadas por vírgula)'
              value={tags.join(', ')}
              onChange={(e) => handleTagsChange(e.target.value)}
            />
          </div>
          <Button type="submit">{postId === 'new' ? 'Adicionar Post' : 'Salvar'}</Button>
          <Button type="button" onClick={() => navigate('/operador')}>Cancelar</Button>
        </form>
      </S.Formulario>
    </S.Page>
  );
};

export default EditPost;