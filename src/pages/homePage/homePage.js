import React, {useEffect, useState} from 'react';
import {Header} from "../../components/header/header";
import {HeaderSlider} from "../../components/header/headerSlider";
import {AboutUs} from "../../components/about/about";
import {ContactUs} from "../../components/contact_us/contactUs";
import {Footer} from "../../components/footer/footer";
import {ContactPopup} from "../../components/contact_popup/contactPopup";
import LesserArmenia from "../../assets/Archived Season/lesser-armenia-1.jpg";
import MelodiesOfTheLegacy from "../../assets/Archived Season/melodies-of-the-legacy-1.jpg";
import TheLastBastion from "../../assets/Archived Season/the-last-bastion-1.jpg";
import {ProductSlider} from "../../components/products_slider/productsSlider";

export const HomePage = ({isLogoWhite, setIsLogoWhite}) => {

    const [contactToggle, setContactToggle]  = useState(false)
    const [collection, setCollection] = useState([{
        url: 'armenianPatterns',
        sliderTitle: 'PATTERNS',
        seasonName: '“Sebastia Gospel”',
        sliderDescription: '"Lesser Armenia"',
        id: 2,
        text: `Miniatures are from the times of 11th century Greater Armenia. The patterns have been preserved to this day
             thanks to the works of the great calligrapher and miniaturist Grigor Akoretsi. For this collection we used 
             the fragments of his work on the Sebastian Gospel of 1066. The calligraphic writing of the Armenian Kingdom
              of Cilicia (1080-1375) was created based on these works. The Cilician school of miniature was especially 
              famous, whose followers became well-known masters on painting churches and for centuries, taught this craft
               other peoples.`
        ,
        sliderItems: [
            {
                id: 1,
                name: 'lorem ipsum "Lesser Armenia"',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia'
            },
            {
                id: 2,
                name: 'lorem ipsum "The Last Bastion"',
                img: [MelodiesOfTheLegacy, TheLastBastion],
                url: 'LatBastion'
            },
            {
                id: 3,
                name: 'lorem ipsum "Melodies"',
                img: [TheLastBastion, LesserArmenia],
                url: 'LegacyMelodies'
            },

            {
                id: 4,
                name: 'lorem ipsum "Melodies"',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia1'
            },
            {
                id: 5,
                name: 'lorem ipsum "The Last Bastion"',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia2'
            },
            {
                id: 6,
                name: 'lorem ipsum "Lesser Armenia"',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia3'
            },

            {
                id: 7,
                name: 'lorem ipsum "The Last Bastion"',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia4'
            },
            {
                id: 8,
                name: 'lorem ipsum "Melodies "',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia5'
            },
            {
                id: 9,
                name: 'lorem ipsum "Lesser Armenia"',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia6'
            },

            {
                id: 10,
                name: 'lorem ipsum "The Last Bastion"',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia7'
            },
            {
                id: 11,
                name: 'lorem ipsum "The Last Bastion"',
                img: [LesserArmenia, MelodiesOfTheLegacy],
                url: 'LesserArmenia8'
            },
        ]
    }])[0]

    useEffect(() => {
        setIsLogoWhite(true)
    }, [])

    return (
        <div className='home-page'>
            <Header isLogoWhite={isLogoWhite} setIsLogoWhite={setIsLogoWhite}/>
            <HeaderSlider />
            <AboutUs/>
            <ProductSlider collection={collection}/>
            <ProductSlider collection={collection}/>
            <ProductSlider collection={collection}/>
            <ContactUs setContactToggle={setContactToggle}/>
            <Footer/>
            {
                contactToggle && <ContactPopup setContactToggle={setContactToggle}/>
            }
        </div>
    )
}



