'use client'
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from '@clerk/nextjs'
import { CartContext } from './_context/CartContext'
import { useState } from "react";
//    export const metadata = {
//    title: "Purple | Join purple lovers",
//    description: "Purple store for purple lovers",
//     };

export default function RootLayout({ children }) {
  



  
const [cart,setCart] = useState([]);
  return (
    <ClerkProvider>
    <CartContext.Provider value={{ cart, setCart }}>
    <html lang="en">
      <body >
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
    </CartContext.Provider>
    </ClerkProvider>
  );
}
