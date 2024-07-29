import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import * as S from './Styles';
import { Button } from '../../components/Button/Styles';

interface AuthenticationProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Authentication: React.FC<AuthenticationProps> = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.access_token);
        setIsAuthenticated(true);
        navigate('/operador');
      } else {
        alert('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <S.Autenticar>
      <S.Icone>
        <h1>Acesso ao Painel do Operador</h1>
      </S.Icone>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit">Entrar</Button>
      </form>
    </S.Autenticar>
  );
};

export default Authentication;
