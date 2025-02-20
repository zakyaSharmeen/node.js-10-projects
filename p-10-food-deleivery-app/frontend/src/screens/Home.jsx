import Carasousel from "../components/Carasousel";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carasousel /></div>

      <div className="m-3">
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>

    
     

      <div><Footer /></div>
    </div>
  );
}

export default Home;
