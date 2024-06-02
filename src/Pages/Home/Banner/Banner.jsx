
const Banner = () => {
    return (
        <div>
            <div className="h-[600px] bg-no-repeat bg-cover bg-fixed flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/donor-blood-gripping-handflexor-600nw-560321068.jpg')" }}>
                <h3 className="text-3xl">Join as a donor</h3>
                <button className="btn btn-accent btn-outline">Search Donors</button>
            </div>
        </div>
    );
};

export default Banner;