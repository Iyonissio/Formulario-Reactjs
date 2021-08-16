import './App.css';
import Form from './Form';
import Form2 from './Form2';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp />
        <h1>Formulario</h1>

        <Form />
        <Form2 />
    </div>
  );
}

export default App;

