import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import Loading from '../Pages/Loading';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data: cart = [], isLoading,refetch } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    if(isLoading){
        <Loading></Loading>
    }

    return [cart,refetch];
    
}

export default useCart;