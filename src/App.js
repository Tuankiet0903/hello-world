
import './App.css';
import Greet from './component/greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';


function App() {
  return (
    <div className="App">
      <Greet name='Bruce' heroName ='Batman'>
        <p>This is childrent props</p>
        </Greet>
      <Greet name='Clark' heroName ='Supperman'/>
      <Greet name='Diana' heroName ='Diana'/>

      <Welcome name='Clark1' heroName ='Supperman1'/>
      <Welcome name='Clark2' heroName ='Supperman2'/>
      <Hello />
      <Message/>
      <Counter/> 
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
    </div>
  );
}

export default App;
