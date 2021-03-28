import React, { Component } from "react";
import Slider from "react-slick";
import Hammer from "react-hammerjs";
import {NavLink} from "react-router-dom";

import '../ProductPageSlider/ProductPageSlider.scss'


export default class UnevenSetsFinite extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 4
    };

    this.state = {
      collection: [
        {
          "id":1,
          "name":"Yervanduni coat of arms",
          "img":[
             {"images": "../../assets/Archived Season/lesser-armenia-1.jpg"},
             {"images": "../../assets/Archived Season/melodies-of-the-legacy-1.jpg"}
          ],
          "url": "LesserArmenia"
       },
       {
          "id":2,
          "name":"Byzantine 6th Century",
          "img":[
             "MelodiesOfTheLegacy",
             "TheLastBastion"
          ],
          "url":"LatBastion"
       },
       {
          "id":3,
          "name":"Euphrates",
          "img":[
             "TheLastBastion",
             "LesserArmenia"
          ],
          "url":"LegacyMelodies"
       },
       {
          "id":4,
          "name":"Yervanduni coat of arms",
          "img":[
             "LesserArmenia",
             "MelodiesOfTheLegacy"
          ],
          "url":"LesserArmenia1"
       },
       {
          "id":5,
          "name":"Byzantine 6th Century",
          "img":[
             "LesserArmenia",
             "MelodiesOfTheLegacy"
          ],
          "url":"LesserArmenia2"
       },
       {
          "id":6,
          "name":"Euphrates",
          "img":[
             "LesserArmenia",
             "MelodiesOfTheLegacy"
          ],
          "url":"LesserArmenia3"
       },
       {
          "id":7,
          "name":"Yervanduni coat of arms",
          "img":[
             "LesserArmenia",
             "MelodiesOfTheLegacy"
          ],
          "url":"LesserArmenia4"
       },
       {
          "id":8,
          "name":"Byzantine 6th Century",
          "img":[
             "LesserArmenia",
             "MelodiesOfTheLegacy"
          ],
          "url":"LesserArmenia5"
       },
       {
          "id":9,
          "name":"Euphrates",
          "img":[
             "LesserArmenia",
             "MelodiesOfTheLegacy"
          ],
          "url":"LesserArmenia6"
       },
       {
          "id":10,
          "name":"Yervanduni coat of arms",
          "img":[
             "LesserArmenia",
             "MelodiesOfTheLegacy"
          ],
          "url":"LesserArmenia7"
       },
       {
          "id":11,
          "name":"Byzantine 6th Century",
          "img":[
             "LesserArmenia",
             "MelodiesOfTheLegacy"
          ],
          "url":"LesserArmenia8"
       }
      ]
    }

    console.log(this.state.collection)
    return (
      <div>
        <Slider {...settings}>
        <div className='product-slider'>
            
            
            <div >
    <h1 className='title product-slider__title'></h1>
    <div className='description product-slider__name'>Season </div>
    <div className='product-slider__wrapper'>
        <div className='product-slider__arrow'>
            <div className="product-slider__arrow--left">
                
            </div>
            <div className="product-slider__arrow--right">
                <img
                    src={''} alt="right arrow"
                    onClick={(event) => {
                    }}
                />
            </div>

        </div>
        <div className="product-slider__wrap">
        {this.state.collection.map(item => {
            return (
                <Hammer onSwipeLeft={() => {
                }}
                        onSwipeRight={() => {
                        }} key={item.id}>
                    <div className="product-slider__item">
                        
                        <NavLink to={`/${'collection.url'}/${item.id}`}
                                 aria-label={'collection.id'}>
                            <div style={{transform: `translateX(0%`}}
                                 className='product-slider__content'
                                 id={item.id}
                            >
                                <img
                                    src={item.img[0]}
                                    alt="bags" className='product-slider__item--img product-slider__item--firstImg'
                                />
                                <img
                                    src={item.img[1]}
                                    alt="bags" className='product-slider__item--img product-slider__item--secondImg'
                                />
                                <div className='description'>
                                    <div className='product-slider__item--description'>{item.name}{item.id}</div>
                                </div>
                            </div>
                        </NavLink>
                        
                    </div>
                </Hammer>
            )
        })}
        </div>
    </div>
</div>
)


</div>
        </Slider>
      </div>
    );
  }
}