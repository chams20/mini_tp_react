// Owl.jsx
// Composant fonctionnel Owl
// Ce composant reçoit des données depuis le composant parent grâce aux props.
// Les props utilisées ici sont : image et description.

function Owl(props) {
  // Les props sont des paramètres passés au composant depuis App.jsx
  // image : chemin de l'image du hibou
  // description : texte descriptif du hibou
  const image = props.image;
  const description = props.description;

  return (
    <div className="owl-card">
      {/* Rendu conditionnel :
          Si une image est fournie, on affiche l'image et la description.
          Sinon, on affiche un message alternatif. */}
      {image ? (
        <>
          <img
            src={image}
            alt="Owl"
            className="owl-image"
          />
          <p className="owl-description">
            {description}
          </p>
        </>
      ) : (
        <p className="owl-no-image">
          Aucune image fournie
        </p>
      )}
    </div>
  );
}

export default Owl;
