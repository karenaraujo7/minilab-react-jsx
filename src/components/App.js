import "bootstrap/dist/css/bootstrap.min.css";
import hello from "./Greeting";
import profile from "./Profile";
import list from "./ToDoList";
import emotionMeter from "./EmotionMeter"


function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      {hello}
      <small>Imagens</small>
      <hr />
      {profile}

      <small>Renderização de listas</small>
      <hr />
      {list}

      <small>Renderização condicional</small>
      <hr />
      {emotionMeter}
    </div>
  );
}

export default App;
