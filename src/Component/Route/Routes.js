import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import ProductPage, { ProductPageLoader } from "../ProductPage/ProductPage";
import ProductManagement from "../ProductManagement/ProductManagement";
import App from "../../App";
import ErrorPage from "../ErrorElement/ErrorElement";
  export   const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            
            children:[
              {
                errorElement: <ErrorPage />,
                children:[
                  {path: "products",
                  element: <ProductManagement/>,
                  errorElement: <ErrorPage />},
                  {
                    path: "products/:id",
                    element: <ProductPage/>,
                    loader: ProductPageLoader
                  }
                ]
              }
             
            ]
        }
  ]);
