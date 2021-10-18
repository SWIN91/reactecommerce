import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img src="https://m.media-amazon.com/images/I/61Cbip981+L._SX3000_.jpg" class="home__image" alt="amazon_banner"></img>
                <div className='home__row'>
                    <Product id='Renji_Abarai' title='Funko POP Animation Shonen Jump Bleach Renji Action Figure' price={115.99} image='https://i.ebayimg.com/images/g/h~wAAOSwwJ1eTEpn/s-l640.jpg' rating={5}></Product>
                    <Product id='Ichigo_Kurosaki' title='Funko POP Anime: Bleach Ichigo Action Figure' price={69.95} image='https://m.media-amazon.com/images/I/41hkr1t59wL._AC_.jpg' rating={5}></Product>
                </div>
                <div className='home__row'>
                    <Product id='Ichigo_Kurosaki_Hollow' title='Funko Pop Animation Bleach Ichigo Kurosaki (Hollow) (Black and White) Action Figure' price={329.99} image='https://images.stockx.com/images/Funko-Pop-Animation-Bleach-Ichigo-Kurosaki-Hollow-Black-and-White-Gamestop-Exclusive-Figure-96.jpg?fit=fill&bg=FFFFFF&w=480&h=320&auto=compress&q=90&dpr=2&trim=color&updated_at=1606948459&pad=0&fm=webp' rating={5}></Product>
                    <Product id='Rukia_Kuchiki' title='Funko Pop Animation Bleach Rukia Action Figure' price={189.99} image='https://cconnect.s3.amazonaws.com/wp-content/uploads/2017/10/Funko-Pop-Bleach-60-Rukia.jpg' rating={5}></Product>
                    <Product id='Grimmjow_Jaegerjaquez' title='Funko Pop Animation Bleach Grimmjow Collectible Action Figure' price={74.94} image='https://cdn11.bigcommerce.com/s-whjhuln98y/images/stencil/1280x1280/products/975/4822/preview__20620.1623271517.jpg?c=2' rating={5}></Product>
                </div>
                <div className='home__row'>
                <Product id='Toshiro_Hitsugaya' title='Funko Pop Animation Bleach Toshiro Nendoroid Action Figure' price={74.94} image='https://m.media-amazon.com/images/I/61qy2IuJ6lL._AC_SL1458_.jpg' rating={5}></Product>
                </div>
            </div>

        </div>
    )
};
