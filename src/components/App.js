import "bootstrap/dist/css/bootstrap.min.css";
import Hello from "./Greeting";
import Imagem from "./Profile";
import Lista from "./ToDoList";
import Emoji from "./EmotionMeter"


function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      <Hello/>
      <small>Imagens</small>
      <hr />
      <Imagem/>

      <small>Renderização de listas</small>
      <hr />
      <Lista/>

      <small>Renderização condicional</small>
      <hr />
      <Emoji/>
    </div>
  );
}

export default App;
