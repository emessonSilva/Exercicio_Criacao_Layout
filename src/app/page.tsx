import React from "react";
import Menu from "./components/Menu";
import TaskList from "./components/TaskList";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Lista de Tarefas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <Menu />
        <div className="content">
          <h1>Lista de tarefas</h1>
          <div className="task-container">
            <TaskList period="day" />
            <TaskList period="night" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
