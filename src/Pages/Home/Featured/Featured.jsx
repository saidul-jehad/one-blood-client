
const Featured = () => {
    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl text-center font-bold text-red-600 mb-8">Featured</h2>

            <div className="max-w-6xl mx-auto">
                {/* Upcoming Events */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-red-500 mb-4">Upcoming Events</h3>
                    <ul>
                        <li className="bg-white p-4 mb-4 rounded shadow">
                            <h4 className="text-xl font-semibold">Blood Drive at Central Park</h4>
                            <p className="text-gray-600">Date: June 20, 2024</p>
                            <p>Join us for our annual blood drive event at Central Park.</p>
                        </li>
                        <li className="bg-white p-4 mb-4 rounded shadow">
                            <h4 className="text-xl font-semibold">Community Health Fair</h4>
                            <p className="text-gray-600">Date: July 10, 2024</p>
                            <p>Visit our booth for free health screenings and blood donation opportunities.</p>
                        </li>
                    </ul>
                </div>
                {/* Announcements */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-red-500 mb-4">Announcements</h3>
                    <p className="bg-white p-4 mb-4 rounded shadow">New blood donation center opening in Downtown on August 1, 2024.</p>
                    <p className="bg-white p-4 mb-4 rounded shadow">Summer donation campaign: Donate blood and get a free t-shirt!</p>
                </div>

                {/* How to Get Involved */}
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-red-500 mb-4">How to Get Involved</h3>
                    <p><a href="/donation-requests" className="text-red-500 hover:underline">Donate Blood</a></p>
                    <p><a href="/dashboard/create-donation-request" className="text-red-500 hover:underline">Crate Donation Request</a></p>
                </div>
            </div>
        </div>
    );
};

export default Featured;