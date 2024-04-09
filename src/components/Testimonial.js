import React from 'react'
import Card from './Card';
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";
import { useState } from 'react';
function Testimonial(props){
    let reviews =props.reviews;
    const[index, setIndex] = useState(0);
    function leftShiftHandler(){
         if(index-1<0){
            setIndex(reviews.length-1);
         }
         else{
            setIndex(index-1);
         }
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }
    function surpriseHandler(){
        let randomindex = Math.floor(Math.random()*reviews.length);
        setIndex(randomindex);
    }
        return(
        <div className='w-[85vw] bg-white md:w-[700px] items-center justify-center mt-10 p-10 hover:shadow-md'>
           <Card review={reviews[index]}></Card>
           <div className="text-3xl fond-bold mt-5 gap-3 text-violet-500">
            <button onClick={leftShiftHandler} 
            className="cursor-pointer hover:text-violet-700">
               <FaChevronLeft/>
            </button>
            <button onClick={rightShiftHandler} 
            className="cursor-pointer hover:text-violet-700">
                <FaChevronRight/>
            </button>
            </div>
            <div>
            <button onClick={surpriseHandler} 
            className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 
            cursor-pointer px-10 py-2 rounded-md text-white font-bold">
                Surprise me
            </button>
            </div>
            
        </div>
    )
}
export default Testimonial