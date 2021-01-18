import React, {useState} from 'react';

export const AboutUs = () => {

    const [hideTopTextToggle, setHideTopTextToggle] = useState(['none', 'block'])
    const [hideBottomTextToggle, setHideBottomTextToggle] = useState(['none', 'block'])

    return (
        <div className='primary-container'>
            <section className="about">
                <div className='about__text about__text--top'>
                    <h1 className='title about__title'>ABOUT US</h1>
                    <div className='description'>
                        Our ancestors were master woodworkers and leatherworkers of late XIX - early XX centuries. The
                        grandfather of one of the founders of our organization - Garibyan Grigor, at the beginning of the XX
                        century lived with his family and worked in the city of Van. By 1920, Grigor returned to Armenia
                        with his family, where he actively gathered pieces of the fragmented culture of Armenian art with
                        his friends, intellectuals such as Ler Kamsar and others. Thanks to them, dozens of the rarest books
                        and museum paintings are preserved in our private archives, which are the foundation of our
                        inspiration, the results of which we show in the design of our bags.
                    </div>
                    <div
                        className='about__read-more'
                        onClick={() => setHideTopTextToggle(['block', 'none'])}
                        style={{display: hideTopTextToggle[1]}}
                    >
                        Read More...
                    </div>
                    <div className='description' style={{display: hideTopTextToggle[0]}}>
                        Our first works were presented
                        in 2016 on the Armenian market, but we soon began to receive orders from our compatriots from
                        abroad
                        - particularly from the USA and Russia. We were very pleased with the presence of such an
                        interest
                        in our products. We especially liked and were encouraged by the fact that our customers
                        understood
                        that they were not buying another piece of luxury, but an object of art, with a rich history,
                        behind
                        which there are many peoples and great dynasties.
                    </div>
                </div>

                <div className='about__text'>
                    <h1 className='title about__title'>OUR WORKS</h1>
                    <div className='description'>
                        he origin of our work is rooted in the days of Western Armenia. By inheriting the craft of our
                        great-grandfathers and their work ethic, we intend to reproduce a touch of history in every product
                        we create. Some are inspired by ancient Armenia’s history, and others are based on the works of the
                        greatest artists. Our goal is to show to art lovers the unique pages of Armenian culture that were
                        lost at different periods or unfairly forgotten.We deeply believe that social values are based on
                        the culture and the way it has been cherished and carefully preserved for hundreds of years.
                    </div>
                    <div
                        className='about__read-more'
                        onClick={() => setHideBottomTextToggle(['block', 'none'])}
                        style={{display: hideBottomTextToggle[1]}}
                    >
                        Read More...
                    </div>
                    <div className="description" style={{display: hideBottomTextToggle[0]}}>
                        We aim to remind the greatness and the significance attributed to art for centuries behind us.
                        Each piece
                        combines a deep ideology, tradition, and stories of people from different historical periods.
                        For
                        this purpose, we divided our products into three categories: Patterns, Lands, and Geniuses.
                    </div>
                </div>
            </section>
        </div>
    )
}