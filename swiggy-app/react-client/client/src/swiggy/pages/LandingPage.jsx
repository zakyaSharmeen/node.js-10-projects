import Chains from "../components/Chains"
import FirmCollection from "../components/FirmCollection"
import ItemsDisplay from "../components/ItemsDisplay"
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
          {/* <ProductMenu/> */}
        </div>
    </div>
  )
}

export default LandingPage