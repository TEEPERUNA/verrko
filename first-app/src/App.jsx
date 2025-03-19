import Greeting from "./components/greetings";
import ThemeToggle from "./components/ThemeToggle";
import LoginMessage from "./components/LoginMessage";

const App = () => (

    <div>
      <Greeting name="Erik" />
      <LoginMessage isLoggedIn={true} />
      <ThemeToggle />
    </div>

  );

export default App