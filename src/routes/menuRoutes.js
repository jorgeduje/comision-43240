import Form from "../components/pages/Form/Form"
import CartContainer from "../components/pages/cart/CartContainer"
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer"
import FirebaseAuth from "../components/pages/firebaseAuth/FirebaseAuth"
import FormFormik from "../components/pages/formFormik/FormFormik"
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer"
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer"

export const menuRoutes = [
    {
        id: "home",
        path:"/",
        Element: ProductsListContainer 
    },
    {
        id: "categories",
        path:"/category/:categoryName",
        Element: ProductsListContainer 
    },
    {
        id: "itemDetail",
        path:"/itemDetail/:id",
        Element: ProductDetailContainer 
    },
    {
        id: "carrito",
        path:"/carrito",
        Element: CartContainer
    },
    {
        id: "form",
        path:"/form",
        Element: Form
    },
    {
        id: "formik",
        path:"/formik",
        Element: FormFormik
    },
    {
        id:"checkout",
        path:"/checkout",
        Element: CheckoutContainer
    },
    {
        id: "firebase-auth",
        path:"/firebase-auth",
        Element: FirebaseAuth
    }
   

]

