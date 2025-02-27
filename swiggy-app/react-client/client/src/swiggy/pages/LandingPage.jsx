import Chains from "../components/Chains"
import CitiesFoodDelivery from "../components/CitiesFoodDelivery"
import CitiesWithGroceryDelivery from "../components/CitiesWithGroceryDelivery"
import FirmCollection from "../components/FirmCollection"
import Footer from "../components/Footer"
import ItemsDisplay from "../components/ItemsDisplay"
import StickyPage from "../components/StickyPage"
// import ProductMenu from "../components/ProductMenu"
import TopBar from "../components/TopBar"



function LandingPage() {
  return (
    <div>
        <TopBar/>
        <div className="landingSection">
          <ItemsDisplay/>
          <Chains/>
          <FirmCollection/>
         
          
        </div>
        <div>
          <StickyPage/>
        </div>

        <div className="landingSection">
        <CitiesFoodDelivery/>
        <CitiesWithGroceryDelivery/>
        </div>



        <Footer/>

    </div>
  )
}

export default LandingPage