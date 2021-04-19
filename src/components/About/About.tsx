import React, { useState, SetStateAction } from 'react';
import cn from 'classnames';

import type { TAboutData } from './aboutData';

import { aboutData } from './aboutData';

import './about.scss';

const About: React.FC = () => {
  const userDeviceScreenSize: number = window.screen.width;
  const [currentTargetBlock, setCurrentTargetBlock] = useState([]);

  const isExistsId = (itemId: never): boolean => currentTargetBlock.includes(itemId);

  return (
    <section className="about">
      {aboutData.map((item: TAboutData) => (
        <div className={cn('about__content', { about__top: item.id === 'about' })} key={item.id} id={item.id}>
          <h1 className="title about__content--title">{item.title}</h1>
          <div className="description">
            <div className="about__content--text">{item.visibleText}</div>
          </div>
          <div
            role="presentation"
            className={
              cn('about__read-more',
                { about__hideText: userDeviceScreenSize > 960 && !isExistsId(item.id) },
                { about__hideText: isExistsId(item.id) },
              )
}
            id={item.id}
            onClick={() => {
              setCurrentTargetBlock((prevState: never[]): any => [
                ...prevState, item.id]);
            }}
          >
            Read More...
          </div>
          <div
            className={
              cn('description',
                { about__hideText: userDeviceScreenSize < 960 && !isExistsId(item.id) })
            }
          >
            <div className="about__content--text">{item.hideText}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
