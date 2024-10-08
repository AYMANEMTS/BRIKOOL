import './App.css';
import {router} from "./routes";
import {RouterProvider} from "react-router-dom";
import {AuthProvider} from "./context/UserProvider";


function App() {

  return (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

  );
}

export default App;
