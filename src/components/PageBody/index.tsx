import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components';

export default function PageBody(){
    return (
        <Container>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;
