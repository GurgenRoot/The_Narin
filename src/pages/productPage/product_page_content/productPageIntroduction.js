import React from './node_modules/react';

export const ProductPageIntroduction = () => {
    return (
        <div className='product-page__introduction'>
            <h1 className='title'>
                <div className="product-page__introduction--title">
                    INTRODUCTION
                </div>
            </h1>
            <div className='product-page__introduction--wrap'>
                <div className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur dignissimos
                    enim eos exercitationem expedita facere impedit inventore ipsam labore mollitia nam, natus nobis,
                    numquam odio perspiciatis quo reprehenderit vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consequuntur dignissimos
                    enim eos exercitationem expedita facere impedit inventore ipsam labore mollitia nam, natus nobis,
                    numquam odio perspiciatis quo reprehenderit vitae.
                </div>
                <div className='product-page__introduction--iframe'>
                    <iframe src="https://www.youtube.com/embed/R5QECN9ae4k" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen className='product-page__iframe'> </iframe>
                </div>
            </div>
        </div>
    )
}

