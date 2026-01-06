import { ToastContainer } from "react-toastify";
import Kanban from "../kanban";
import Header from "./Header";
import { ContainerHome, Content } from "./styles/Home.styles";

const Home = () => {
  return (
    <ContainerHome>
      <ToastContainer />
      <Header />
      <Content>
        <Kanban />
      </Content>
    </ContainerHome>
  );
};

export default Home;
