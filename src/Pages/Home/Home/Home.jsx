import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Featured from "../Featured/Featured";


const Home = () => {
    return (
        <div>
            <Helmet><title>OneBlood | Home</title></Helmet>

            <Banner></Banner>
            <Featured></Featured>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;