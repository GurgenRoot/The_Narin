import React, {useEffect, useState} from 'react';
//components
import Header from "../../components/Header";
import About from "../../components/About";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import ContactPopup from "../../components/ContactPopup";
import MainSlider from "../../components/MainSlider";
//img
import LesserArmenia from "../../assets/Archived Season/lesser-armenia-1.jpg";
import MelodiesOfTheLegacy from "../../assets/Archived Season/melodies-of-the-legacy-1.jpg";
import TheLastBastion from "../../assets/Archived Season/the-last-bastion-1.jpg";
//style
import './HomePage.scss'
import Img1 from "../../assets/photo_2020-07-11_01-19-25.jpg";
import Img2 from "../../assets/photo_2020-07-11_01-19-30.jpg";
import Img3 from "../../assets/photo_2020-07-11_01-19-31.jpg";
import Img4 from "../../assets/photo_2020-07-11_01-19-37.jpg";
import ProductSlider from "../../components/ProductsSlider";

export const HomePage = ({isLogoWhite, setIsLogoWhite}) => {
    const [timerToggle, setTimerToggle] = useState(true)

    useEffect( () => {
        window.scrollTo({top: 0})
    },[])

    const sliderImages = [
        {id: 0, img: Img1},
        {id: 1, img: Img2},
        {id: 2, img: Img3},
        {id: 3, img: Img4} // slider images может быть в useMemo
    ]


    const [contactToggle, setContactToggle]  = useState(false)
    const [collections, setCollections] = useState([{
        url: 'armenianPatterns',
        sliderTitle: 'PATTERNS',
        seasonName: '“Sebastia Gospel”',
        sliderDescription: '"Lesser Armenia"',
        id: 1,
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
    },{
        url: 'armenianPatterns',
        sliderTitle: 'LANDS',
        seasonName: '“Winding path”',
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
    },{
        url: 'armenianPatterns',
        sliderTitle: 'GENIUSES',
        seasonName: '“Eastern moments”',
        sliderDescription: '"Lesser Armenia"',
        id: 3,
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
    }])

    const patterns = [collections[0]]
    const lands = [collections[1]]
    const geniuses = [collections[2]]
    console.log(patterns,lands,geniuses, collections)
    return (
        <div className='home-page'>
            <Header isLogoWhite={isLogoWhite} setIsLogoWhite={setIsLogoWhite}/>
            <MainSlider sliderImages={sliderImages} timerToggle={timerToggle} setTimerToggle={setTimerToggle}/>
            <About/>
            <ProductSlider collections={patterns}/>
            <ProductSlider collections={lands}/>
            <ProductSlider collections={geniuses}/>
            <ContactUs setContactToggle={setContactToggle}/>
            <Footer/>
            {
                contactToggle && <ContactPopup setContactToggle={setContactToggle}/>
            }
        </div>
    )
}



