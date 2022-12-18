import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { hello } from "./utils/hello";

hello();

const tasks = [
  { id: 1, content: "obejrzeć mecz", done: false },
  { id: 2, content: "zjeść pizzę", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
