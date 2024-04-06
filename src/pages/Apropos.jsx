import C_Apropos from "../Components/C_Apropos";
import React from "react";
import C_Navbar from "../Components/C_Navbar";
import C_Header from "../Components/C_Header";
import "../Components/Header.css";


export default function Apropos() {
    return (
        <>
            <C_Apropos />
            <div><C_Navbar/><C_Header type="apropos"/></div>
        </>
    );
}


