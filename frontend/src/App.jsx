import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
//TODO: importar import { RouterProvider, createBrowserRouter } from "react-router-dom"; y las paginas


/*const router = createBrowserRouter([
	{
		path: "/", //Ruta de la URL
    //errorElement: <ErrorPage />, //Componente para cargar página de errores
		children: [
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/users',
        element: <Users />,
        loader: async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          return res.json(); //loader para manejar petición de datos
        }
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/products',
        element: <Products />
      },
    ], //Componentes que son navegables
	},
]);*/


function App() {


  return (
    <>
     
    </>
  )
}

export default App;
