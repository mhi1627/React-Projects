

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Card>
     {"MAN Tan pan "}
    </Card>
  );
}

  function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
 function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
