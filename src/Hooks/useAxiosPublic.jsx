import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: "https://one-blood-server.vercel.app",
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;