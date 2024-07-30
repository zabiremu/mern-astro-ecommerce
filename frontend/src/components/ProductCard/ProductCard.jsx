import React from "react";
import Rating from "../Rating/Rating";
import {NavLink} from 'react-router-dom';
const ProductCard = () => {
    return(
        <>
            <NavLink
                to="/product-details"
                className="relative mx-auto overflow-hidden bg-center bg-cover cursor-pointer group rounded-3xl sm:mr-0 xl:mx-auto"
            >
                <img
                    src="https://pagedone.io/asset/uploads/1700731972.png"
                    alt="Jacket image"
                />
                <div className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">
                    <div className="flex items-center justify-between mb-2">
                        <h6 className="text-base font-semibold leading-7 text-black ">
                            Trendy Jacket
                        </h6>
                        <h6 className="text-base font-semibold leading-7 text-right text-indigo-600">
                            $100
                        </h6>
                    </div>
                    <Rating/>
                    <p className="text-xs leading-5 text-gray-500">
                        Women's Winter Wear
                    </p>
                </div>
            </NavLink>
        </>
    );
};

export default ProductCard;