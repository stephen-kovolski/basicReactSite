import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';

function App() {
 let pic = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q-yhaDNJhk2VUyrYtUT77AHaE7%26pid%3DApi&f=1&ipt=ff0e39513e494bf2d31efa191b0fb87720fc9682d5b7f0d0f309315fbbe8db2f&ipo=images"

  return (
    <>
      <div>
        <Navbar 
          name="Stephen Kovolski"
          
        />
      </div>

      <div>
        <Card 
          img={pic}
          title="Software Engineer"
          phone="401-123-4567"
          email="myemail@email.com"
        />
        </div>
    </>


   
  )
}

export default App;
