import React from "react";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
const Card = (props)=>{
    let review = props.review;
    return(
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-25" src={review.image}/>
                <div className="aspect-square rounded-full w-[140px] h-[140px] z-[-10] absolute top-[-6px] left[10px] bg-violet-500"></div>
            </div>
            <div className="text-center mt-7"> 
                <p className="text-2xl font-bold capitalize">{review.name}</p>
            </div>
            <div className="text-center mt-7">
                <p className="text-violet-400 uppercase text-sm">{review.job}</p>
            </div>
            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteLeft/>
            </div>
            <div className="mx-auto mt-5 text-slate-600">
                {review.text}
            </div>
            <div className="mx-auto text-violet-400 mt-5">
                <FaQuoteRight/>
            </div >
            
        </div>
    )
}
export default Card;