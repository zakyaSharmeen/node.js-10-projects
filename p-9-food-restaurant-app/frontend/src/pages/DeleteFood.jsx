


import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Fixed typo
import { useSnackbar } from "notistack";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function DeleteFood() {
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();

    const handleDeleteFood = () => {
        if (!id) {
            enqueueSnackbar("Invalid ID", { variant: "error" });
            return;
        }

        setLoading(true);

        axios.delete(`http://localhost:5000/food/${id}`)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Food Deleted", { variant: "success" });
                navigate("/admin");
            })
            .catch((err) => {
                setLoading(false);
                enqueueSnackbar("Error deleting food", { variant: "error" });
                console.error(err);
            });
    };

    return (
       

        <div className='p-6 bg-gray-50 flex justify-center items-center'>
        {loading && <Spinner/>}
        <div className='container max-w-lg shadow-lg p-5'>
            <Link to="/admin" className='flex justify-center items-center bg-gray-400 mb-4 w-12 py-2 px-4 text-sm rounded-xl'>Back</Link>
            <h2 className='text-2xl mb-4 font-semibold text-gray-800'>Are You Sure You Want to Delete This Food Item?</h2>
            <button onClick={handleDeleteFood} className='bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-lg w-full'>
                Yes, Delete
            </button>
        </div>
    </div>
    );
}

export default DeleteFood;


