import React from "react";
import '../../App.css'

const Button = ({label, onClick}) => {
    return (
        <button className="before:ease relative h-12 w-40 overflow-hidden border border-gray-500 bg-gray-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-40"  onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;