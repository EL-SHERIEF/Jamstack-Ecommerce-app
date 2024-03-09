import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

function Hero({homeData}) {
  return (
    <div className="hero">
      <video
       src={homeData?.attributes?.background_video?.data?.attributes?.url}
       autoPlay muted loop className="bg2">
        <source type="video/mp4" />
      </video>
      <h1>{homeData?.attributes?.Hero_h1}</h1>
     <p>{homeData?.attributes?.Hero_p}</p>

      <div className="group">
        <Link href="#sectors" className="btn filled">
        {homeData?.attributes?.Button_1}
        <ShoppingBag /></Link>

        <Link href="./AboutUs.html" className="btn lined">
        {homeData?.attributes?.Button_2}
        <ArrowRight/></Link>
      </div>

      <div className="clock">
        <div className="box"><small>{homeData?.attributes?.stats_1}</small>{homeData?.attributes?.stats_text_1}</div>
        <div className="box"><small>{homeData?.attributes?.stats_2}</small>{homeData?.attributes?.stats_text_2}</div>
        <div className="box"><small>{homeData?.attributes?.stats_3}</small>{homeData?.attributes?.stats_text_3}</div>
        <div className="box"><small>{homeData?.attributes?.stats_4}</small>{homeData?.attributes?.stats_text_4}</div>
        <div className="box"><small>{homeData?.attributes?.stats_5}</small>{homeData?.attributes?.stats_text_5}</div>
        <div className="box last">
        <Image    className='img'
                  src={homeData?.attributes?.stats_img?.data?.attributes?.url}
                  alt="Our Approach"
                  width={100}
                  height={100}
                />
        </div>
      </div>
      <div className="bg1"></div>
    </div>
  );
}

export default Hero;