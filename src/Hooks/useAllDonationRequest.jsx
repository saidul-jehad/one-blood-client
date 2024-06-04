import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllDonationRequest = () => {
    const axiosSecure = useAxiosSecure()

    const {
        data: all_donation_request = []
    } = useQuery({
        queryKey: ["all-donation-request"],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-donation-request')
            return res.data
        }
    })

    return [all_donation_request]
};

export default useAllDonationRequest;