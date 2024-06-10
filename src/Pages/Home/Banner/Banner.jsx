import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Banner = () => {
    const { user } = useAuth()
    return (
        <div style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/donor-blood-gripping-handflexor-600nw-560321068.jpg')" }} className="h-[600px] bg-no-repeat bg-cover bg-fixed text-white">
            <div className=" bg-black bg-opacity-40  w-full h-full flex flex-col gap-6 items-center justify-center">

                <div className="lg:w-4/5 w-11/12">
                    <div className=" flex justify-center items-center  gap-9 ">
                        <Link to={`${!user ? "/register" : "/"}`} ><h3 className="btn text-white btn-accent btn-outline">Join as a donor</h3></Link>

                        <Link to={"search"}>  <button className="btn btn-accent btn-outline">Search Donors</button></Link>
                    </div>

                    <p className="mt-11">
                        Join us in making a life-saving impact. Your single blood donation can help save up to three lives. Every drop counts—be a hero today! Visit your nearest blood donation center or join a local blood drive. Together, we can ensure that hospitals have the blood they need for emergencies, surgeries, and chronic treatments.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;