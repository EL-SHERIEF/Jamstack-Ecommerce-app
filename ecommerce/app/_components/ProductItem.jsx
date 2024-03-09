'use client'
import { ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import CartApis from '../_utils/CartApis'
import { CartContext } from '../_context/CartContext';
import { useContext } from 'react';
export default function ProductItem({ product ,currency }) {
  const { user } = useUser();
  const router = useRouter();

  const {cart,setCart} = useContext(CartContext)
  
const HandleAddToCart = ()=>{
if(!user){
router.push('/sign-in')
}
else{
  const data = {
data:{
  userName: user.fullName,
  email: user.primaryEmailAddress.emailAddress,
  products: [product?.id]
}
  }

CartApis.addToCart(data).then(res=>
  {
    console.log('cart created',res.data.data)
    setCart(oldCart=>[
      ...oldCart,
      {
        id: res?.data?.data?.id,
        product
      }
    ])
  })
  .catch(error=>{
    console.log('error', error)
  })
}
}
  return (
            
            <div className="product">
              <div  className="preview">
                <div className="genre">
                  <div className="tag">{product?.attributes?.Category}</div>
                </div>
                <button href="/" className="linkdot" onClick={()=>HandleAddToCart()}>
                  <ShoppingBag className='i'/>
                </button>
                <Link  href={`/product-Details/${product?.id}`} className='cursor-pointer'>
                    <Image
                  src={product?.attributes?.banner?.data?.attributes?.url}
                  alt="Image Description"
                  width={600}
                  height={600}
                />
                </Link>
              

              </div>
              <div className='STARS'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
              </div>
               <Link  href={`/product-Details/${product?.id}`} className='title'>{product?.attributes?.title}</Link>
             <p className='description'>{product?.attributes?.description}</p>
              <div className="price">
                {product?.attributes?.price}
                <span>{currency}</span>
              </div>
            </div>
       
  );
}

