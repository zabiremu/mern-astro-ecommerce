import ProductDetails from "../components/ProductDetails/ProductDetails";
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';

const ProductDetailsPage =() => {
    return(
        <>
            <Navbar/>
            <main>
                <ProductDetails/>
            </main>
            <Footer />
        </>

    )
};
export default ProductDetailsPage;
