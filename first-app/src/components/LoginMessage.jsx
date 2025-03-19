export default function LoginMessage({ isLoggedIn }) {
    return <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>;
  }
  