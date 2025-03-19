import Greeting from "./components/greetings";
import ThemeToggle from "./components/ThemeToggle";
import LoginMessage from "./components/LoginMessage";
import TodoList from "./components/TodoList";

const App = () => {
    const tasks = ["Study", "Eat", "Sleep", "Walk", "Read", "Relax"];
    return (
    <div>
      <Greeting name="Erik" />
      <LoginMessage isLoggedIn={true} />
      <TodoList todos={tasks} />
      <ThemeToggle />
    </div>
);
};

export default App