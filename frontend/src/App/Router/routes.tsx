import { createBrowserRouter} from "react-router-dom";
import App from "../Layouts/App";
import Catalog from "../../Features/Catalog";
import { ProductDetails } from "../../Features/ProductDetails";
import HomePage from "../../Features/Home/homePage";
import AboutPage from "../../Features/About/aboutPage";
import ContactPage from "../../Features/contact/contactPage";


export const router= createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {path: '',element: <HomePage/>},
            {path: 'catalog',element: <Catalog />},
            {path: 'catalog/:id',element: <ProductDetails />},
            {path: 'about',element: <AboutPage/>},
            {path: 'contact', element: <ContactPage/>}
        ]
    }
])