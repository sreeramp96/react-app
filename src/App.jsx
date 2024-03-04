import Footer from "./Footer";
import Header from "./Header";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 95 },
    { id: 7, name: "celery", calories: 45 },
    { id: 8, name: "carrots", calories: 105 },
    { id: 9, name: "corn", calories: 159 },
    { id: 10, name: "brovcoli", calories: 37 }
  ];
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

      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null} */}

      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
    </>
  );
}

export default App;
