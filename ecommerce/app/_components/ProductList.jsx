import React, { useEffect } from 'react';
import ProductItem from './ProductItem'
import interact from 'interactjs';

export default function ProductList({productList, header,currency}) {
  useEffect(() => {
    const section7boxes = (elem) => {
      interact(elem)
        .draggable({
          inertia: true,
          modifiers: [
            interact.modifiers.restrictRect({
              restriction: 'child',
              endOnly: false,
            }),
          ],
          autoScroll: {
            container: elem.parentNode,
            margin: 20,
            speed: 1000,
          },
          onmove: (event) => {
            const target = event.target;
            const dx = event.dx;
  
            target.scrollLeft -= dx;
          },
        });
    };
  
    document.querySelectorAll(".wrapper").forEach(section7boxes);
  }, []);
  return (
    <div className="section7">
      <div className="header">
        <h1>{ header }</h1>
      </div>
<div className="wrapper">
  <div className="slider">
   {productList.map(item => (
      <ProductItem product={item}  key={item.id} currency={currency}/>
    ))} 
  </div>
</div>
         </div>


  )
}
