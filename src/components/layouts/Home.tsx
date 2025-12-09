import CardTask from "../cardTask";
import Kanban from "../kanban";
import Header from "./Header";
import { ContainerHome, Content } from "./styles/Home.styles";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <Content>
        <Kanban />
      </Content>
    </ContainerHome>
  );
};

export default Home;
