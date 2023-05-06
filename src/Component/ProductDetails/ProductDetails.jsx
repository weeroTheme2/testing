import React from 'react';
import Images from '../Images';
import ReactImageMagnify from 'react-image-magnify';


const ProductDetails = () => {
    const image = "assets/product-10-865x1024.jpg"
    return (
       <div className='flex'>
         <div className='w-[300px] h-[200px]'>
         <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: image,
                        },
                        largeImage: {
                            src: image,
                            width: 300,
                            height: 750
                        }
                    }} />
        
        </div>
        <Images imgsrc="assets/product-10-865x1024.jpg" className="w-[400px]"/>
       </div>
    );
};

export default ProductDetails;