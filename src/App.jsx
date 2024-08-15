import Header from "./Header"
import Footer from "./Footer"
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePic from "./ProfilePic";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";
import ToDoList from "./ToDoList";
import MyComponent5 from "./MyComponent5";
import MyComponent6 from "./MyComponent6";
import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import MyComponent7 from "./MyComponent7";
import Stopwatch from "./Stopwatch";

function App() {

  const fruits = [{id:1, name: 'apple', calories: 95},
                  {id:2, name: 'orange', calories:45},
                  {id:3, name: 'banana', calories: 105},
                  {id:4, name: 'coconut', calories: 159},
                  {id:5, name: 'pineapple', calories: 37}];
  
  const vegetables = [{id:6, name: 'potatoes', calories: 110},
                      {id:7, name: 'celery', calories:25},
                      {id:8, name: 'carrots', calories: 75},
                      {id:9, name: 'corn', calories: 78},
                      {id:10, name: 'brocoli', calories: 35}];

  return(
    <>
      <Stopwatch/>
      {/* <MyComponent7/> */}
      {/* <ComponentA/> */}
      {/* <DigitalClock/> */}
      {/* <MyComponent6/> */}
      {/* <MyComponent5/> */}
      {/* <ToDoList/> */}
      {/* <MyComponent4/> */}
      {/* <MyComponent3/> */}
      {/* <MyComponent2/> */}
      {/* <Counter/>
      <ColorPicker/> */}
      
      {/* <Header/>
      <Food/>
      <Card/>
      <Button/>

      <MyComponent/>
      
      <ProfilePic/>

      <UserGreeting isLoggedIn={true} username="Don" />
      <UserGreeting isLoggedIn={true}/>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}

      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Don" age={18} isStudent={true}/>
      <Footer/> */}
    </>
  );
  
}

export default App
