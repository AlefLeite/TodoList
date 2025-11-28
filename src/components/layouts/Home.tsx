import CardTask from "../cardTask";
import Header from "./Header";
import { ContainerHome, Content } from "./styles/Home.styles";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Content>
        <CardTask />
      </Content>
    </ContainerHome>
  );
};

export default Home;
