import React, { useState, useEffect } from "react";
//styles ans animations
import { motion } from "framer-motion";
import { colorAnimation } from "../animations";
import styled from "styled-components";
//normal components
import TodoBar from "../components/TodoBar";
import AddTodo from "../components/AddTodo";
import { useLocation } from "react-router";
import TodoList from "../components/TodoList";
import Lottie from "lottie-react-web";
import suchEmpty from "../animations/suchEmpty.json";
import Wave from "../components/Wave";
import githubLeft from "../img/github-corner-left.svg";

export const UserContext = React.createContext();

const Home = () => {
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("All");

  const location = useLocation();
  const pathId = location.pathname.split("/")[1];

  useEffect(() => {
    const localData = localStorage.getItem("tasks");
    setTasks(localData ? JSON.parse(localData) : []);
  }, []);

  return (
    <UserContext.Provider value={{ tasks, setTasks, status, setStatus }}>
      <StyledHome>
        <Github href="https://github.com/Apoorvssj/TodoApp">
          <img src={githubLeft} alt="Fork me on GitHub" />
        </Github>
        <Header>
          <motion.h1 variants={colorAnimation} initial="hidden" animate="show">
            Dump your To-Do's here
          </motion.h1>
        </Header>
        <TodoBar />
        {pathId && <AddTodo />}
        {tasks.length ? (
          <TodoList />
        ) : (
          <Empty>
            <span>Wow,Such Empty?</span>
            <div>
              <Lottie
                options={{
                  animationData: suchEmpty,
                  loop: false,
                  autoplay: true,
                }}
                height={"30rem"}
                width={"40rem"}
              />
            </div>
          </Empty>
        )}
        <Wave />
      </StyledHome>
    </UserContext.Provider>
  );
};

const StyledHome = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled(motion.div)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  align-items: flex-end;
  min-height: 20vh;
  h1 {
    /* margin-top: 1rem; */
    color: #23d997;
    font-size: 2rem;
  }
  @media only screen and (max-width: 640px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Empty = styled(motion.div)`
  /* margin-top: 5rem; */
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  z-index: 10;
`;

const Github = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

export default Home;
