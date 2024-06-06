import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const {
        data: all_users = [],
        refetch
    } = useQuery({
        queryKey: ["all-users"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-users`)
            return res.data
        }
    })

    return [all_users, refetch]
};

export default useAllUsers;