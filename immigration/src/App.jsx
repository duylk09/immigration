import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {

  return(
    <>
      <Header/>
      <Food/>
      <Card/>
      <Button/>
      {/* <UserGreeting isLoggedIn={true} username="Don" /> */}
      <UserGreeting isLoggedIn={true}/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Don" age={18} isStudent={true}/>
      <Footer/>
    </>
  );
  
}

export default App
