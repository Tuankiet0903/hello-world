import logo from './logo.svg';
import './App.css';
import Greet from './component/greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';


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
    </div>
  );
}

export default App;
