import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

export const Content = styled.div`
  display: flex;
`;

export const MainPosts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 2rem;
  margin-right: 2rem;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const PostInfo = styled.div`
  padding: 1rem 0;
`;

export const PostDate = styled.p`
  font-size: 0.9rem;
  color: #999;
`;

export const PostCategory = styled.p`
  font-size: 0.9rem;
  color: #6c63ff;
`;

export const PostTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

export const PostSummary = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const SidePosts = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

export const SidePost = styled.div`
  display: flex;
  gap: 1rem;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const SidePostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

