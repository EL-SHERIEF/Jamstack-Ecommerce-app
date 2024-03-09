'use client'
import React, { useEffect, useState} from 'react';
import { useUser } from '@clerk/nextjs';
function Footer() {

  return (
  
<div class="footer">
    <div class="bg3"></div>

    <div class="upper">
       <div class="left"> <img alt="" />
        <h1>Proud to be your all in one partner.</h1>
        <h2>SINCE 1989.</h2></div>
       <div class="right">
        <div class="group"><h1>Company</h1>
        <a href="./contact.html">Blog</a><a href="./contact.html">Careers</a><a href="./contact.html">Pricing</a>
    </div>
    <div class="group"><h1>pages</h1>
        <a href="./contact.html">Home</a><a href="./contact.html">ABOUT US</a><a href="./contact.html">BRANDS</a>
    </div>
</div>
    </div>
    <div class="lower">
        <p>Copyright © ahmed elsherief, jack Co. All rights reserved.</p>
        <div class="social"><a href="#"><img alt="youtube"/></a></div>
    </div>
 
    </div>

  );
}

export default Footer;