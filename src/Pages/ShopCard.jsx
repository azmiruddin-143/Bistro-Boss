import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../Shared/useAxiosSecure';
import useCart from '../Shared/useCart';

const ShopCard = ({ item }) => {
    const { name, _id, image, price, category, recipe } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCart()

    const addToCart = () => {
        console.log(item);
        if (user && user?.email) {
            const cartItem ={
              manuId : _id,
              email : user?.email,
              name,
              image,
              price,
              category
            }

            axiosSecure.post('/carts',cartItem)
            .then(res =>{
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Congress Add to Cart",
                        icon: "success",
                        draggable: true
                      });
                      refetch()
                }
            })


        } else {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signin',{state: {from: location}})
                  }
                
            });
        }

    }

    return (
        <div className="max-w-sm mx-auto relative bg-gray-50 shadow-md rounded-lg overflow-hidden">
            <img className='w-full h-[250px] object-cover'
                src={image}
            />
            <div className='absolute top-2 py-1 px-2 text-white bg-black right-3'>
                <h1>{price}</h1>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 text-center">{name}</h2>
                <p className="mt-2 w-10/12 text-center mx-auto text-gray-600 text-sm">
                    {recipe}
                </p>
                <button onClick={addToCart} className="mt-4  border-yellow-600 rounded-md border-b-2 bg-gray-200 pb-3  text-yellow-600  py-2 px-4 mx-auto flex hover:border-b-0 hover:bg-black  hover:text-yellow-600 duration-100 ">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default ShopCard;