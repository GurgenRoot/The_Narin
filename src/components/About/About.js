import React, {useState} from "react";
import cn from 'classnames';

import {aboutData} from './AboutData';

import './About.scss';

export const About = () => {
    const userDeviceScreenSize = window.screen.width
    const [currentTargetBlock, setCurrentTargetBlock] = useState([])

    return (
        <section className='about'>
            {
                aboutData.map(i => {
                    return (
                        <div className={cn('about__content', {about__top: i.id === 1})} key={i.id} id={i.title === 'ABOUT US' ? 'about' : 'our-works'}>
                            <h1 className='title about__content--title'>{i.title}</h1>
                            <div className='description'>
                                <div className='about__content--text'>{i.visibleText}</div>
                            </div>
                            <div className={
                                cn('about__read-more',
                                    {about__hideText: userDeviceScreenSize > 960 && !currentTargetBlock.some(currentTargetId => currentTargetId === i.id)},
                                    {about__hideText: currentTargetBlock.some(currentTargetId => currentTargetId === i.id)},
                                )}
                                 id={i.id}
                                 onClick={(e) => {
                                     setCurrentTargetBlock(currentTargetBlock => [...currentTargetBlock, i.id])
                                 }}>
                                Read More...
                            </div>
                            <div className={
                                cn('description',
                                    {about__hideText: userDeviceScreenSize < 960 && !currentTargetBlock.some(currentTargetId => currentTargetId === i.id)})
                            }>
                                <div className='about__content--text'>{i.hideText}</div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
};

