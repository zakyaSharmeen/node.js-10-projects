import axios from "axios"
import { useSnackbar } from "notistack"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

function EditFood() {
  const [name, setName] = useState("")
  const [priceInCents, setPriceCents] = useState("")

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();  

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5000/food/${id}`)
            .then((res) => {
                setName(res.data.name)
                setPriceCents(res.data.priceInCents)
                setLoading(false)
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
                alert("An error occured")
            });
  },[id])


  const handelEditFood = ()=>{
    const data = {name, priceInCents}
    setLoading(true)
    axios.put(`http://localhost:5000/food/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Food Editted succesfully", { variant: "success" });
                navigate("/admin");
            })
            .catch((err) => {
                setLoading(false);
                enqueueSnackbar("Error deleting food", { variant: "error" });
                console.error(err);
            });

  }


  return (
    <div className='p-6 bg-gray-50 flex justify-center items-center'>
        {loading && <Spinner/>}
        <div className='container max-w-lg shadow-lg rounded-lg p-5 bg-white'>
            <Link to="/admin" className='flex justify-center items-center bg-gray-400 mb-4 w-12 py-2 px-4 text-sm rounded-xl'>Back</Link>
            <h1 className='text-3xl font-semibold my-4 text-gray-800'>Edit Food</h1>
            <div className='my-4'>
                <label htmlFor="name" className='block text-md text-gray-600 mb-2'>Name</label>
                <input 
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    className='border border-gray-300 px-4 py-2 w-full rounded-md'    
                />

                <label htmlFor="priceInCents" className='block text-md text-gray-600 mb-2'>Price in cents</label>
                <input 
                    id="priceInCents"
                    type="number"
                    value={priceInCents}
                    onChange={(e)=> setPriceCents(e.target.value)}

                    className='border border-gray-300 px-4 py-2 w-full rounded-md'    
                />

                <button onClick={handelEditFood} className='w-full bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded-md mt-4'>
                    Save Changes
                </button>
            </div>
        </div>

        
    </div>
  )
}

export default EditFood