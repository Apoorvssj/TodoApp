import React, { useContext } from "react";
//styles ans animations
import { motion } from "framer-motion";
import styled from "styled-components";
import { hover } from "../animations";
import { Link } from "react-router-dom";
import { UserContext } from "../pages/Home";
//normal components

const TodoBar = () => {
  const { setStatus } = useContext(UserContext);

  // let arr = [...tasks];

  const onClickHandler = (e) => {
    // arr.forEach((a) => (a.status = !a.status));
    // setTask(arr);
    setStatus(e.target.value);
  };

  return (
    <Bar>
      <Link to={`/addtodo`}>
        <Button whileHover={hover} whileTap={{ scale: 1 }}>
          Add a todo <span>+</span>
        </Button>
      </Link>
      <Select whileTap={{ scale: 0.9 }}>
        <select name="todos" id="filter" onChange={onClickHandler}>
          <motion.option value="All">All</motion.option>
          <motion.option value="Completed">Completed</motion.option>
          <motion.option value="Uncomplete">Uncomplete</motion.option>
        </select>
      </Select>
    </Bar>
  );
};

const Bar = styled(motion.div)`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1rem;
  border: none;
  background-color: white;
  font-size: 2rem;
  font-weight: lighter;
  margin-right: 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  span {
    display: inline-block;
    background-color: #1b1b1b;
    color: #23d997;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 720px) {
    margin-right: 0rem;
  }
`;

const Select = styled(motion.div)`
  select {
    font-weight: lighter;
    background-color: #282828;
    @media only screen and (max-width: 720px) {
      padding: 0.5rem 4rem;
    }
  }
  @media only screen and (max-width: 720px) {
    margin-top: 1rem;
  }
`;

export default TodoBar;
