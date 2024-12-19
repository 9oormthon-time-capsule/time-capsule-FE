import styled from 'styled-components';

function MainLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default MainLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  min-width: 700px;

  height: 100vh;

  margin: 0 auto;
`;
