import Owl from './Owl.jsx';
import owl1 from './photos/owl.jpg';
import owl2 from './photos/owl2.jpg';

// Composant principal de l'application
function App() {
  return (
    <>
      <h1 className="title">Mini TP React – Owl Component CHAMS</h1>

      <div className="app">
        <Owl
          image={owl1}
          description="Ce hibou observe la vie avec sagesse. Patient au-dessus du vide, il scrute l'horizon avec aisance."
        />

        <Owl
          image={owl2}
          description="Celui-ci est très majestueux. Fidèle à lui-même."
        />
        {/* Sans donner la photo, le message conditionnel s'affiche */}
        <Owl

        />
      </div>
    </>
  );
}

export default App;
