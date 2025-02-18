


import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    return !!localStorage.getItem('token'); // Check if a token exists
};

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
