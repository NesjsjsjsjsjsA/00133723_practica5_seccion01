import './App.css'
import './util'
import { getImageUrl } from './util';

function App() {

  function Avatar({ person, size }) {
    return (
      <img
        className="img"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }


  function Title(props) {
    return <h2 className='T'>{props.nombre}</h2>;
  }

  function Data(props) {
    return <div className='dataClear'>
      <ul><li className='Li'><b>Profesión: </b>{props.profesion}</li></ul>
      <ul><li className='Li'><b>premios:</b>{props.premios}</li></ul>
      <ul><li className='Li'><b>Descubrio: </b>{props.descubrio}</li></ul>
    </div>;
  }

  function Profile() {
    return (
      <div className='BGT'>
        <Title nombre={"Marie Sklodowska-Curie"} />
        <Avatar
          size={100}
          person={{
            name: 'Marie Curie',
            persLink: 'https://d33wubrfki0l68.cloudfront.net/',
            imageId: 'be431f85ac79feccbf2dc12ef2a91986e9db54cb/6c2ee/images/marie-curie',
          }}
        />
        <Data
          profesion={"Fisica y quimica"}
          premios={"4(Premio Nobel de Fisica, Premio Nobel de Quimica, Medalla Davy, Medalla Matteucci)"}
          descubrio={"polonio(elemento quimico)"}
        />
      </div>


    )
  }

  function Profile2() {
    return (
      <div className='BGT'>
        <Title nombre={"Katsuko Saruhashi"} />

        <Avatar
          size={80}
          person={{
            name: 'Katsu',
            perslink: 'https://upload.wikimedia.org/',
            imageId: 'wikipedia/commons/2/2b/Josei-Kyoyo-1965-March-1',
          }}
        />
        <Data
          profesion={"Geoquímica"}
          premios={"2(Premio Miyake, Premio Tanaka)"}
          descubrio={"Método para medir el CO2 en el agua del mar"}
        />

      </div>


    )
  }

  return (
    <>
      <div className='X'>
        <h1>Cientificos Notables</h1>
        <Profile />
        <p></p>
        <Profile2 />
      </div>
    </>
  )
}
export default App
