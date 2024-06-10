import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
    const axiosPublic = useAxiosPublic()
    const { data: blogs = [] } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs')
            return res.data
        }
    })


    return (
        <div className="pt-28">
            <Helmet><title>OneBlood || Blog</title></Helmet>

            <div className="">
                <h3 className="text-3xl text-center">All Blogs</h3>

                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5">
                    {
                        blogs.map(blog => <div key={blog._id} className="flex p-5 rounded-lg bg-slate-100 flex-col lg:flex-row gap-6 shadow-xl mt-7">
                            <figure><img className="w-96" src={blog.thumbnail} alt="Shoes" /></figure>
                            <div className="">
                                <h2 className="card-title">
                                    {blog.title}
                                </h2>


                                <div className="flex justify-end mt-4">
                                    <Link to={`/blog-details/${blog._id}`}>
                                        <button className="btn-accent btn-outline btn">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>


                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;