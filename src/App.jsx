import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Card />
      <Footer />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={27} isStudent={false} />
      <Student name="Sandy" age={29} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} username="Sreeram" />
      <List />
    </>
  );
}

export default App;
