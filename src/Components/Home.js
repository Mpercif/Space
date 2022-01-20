import React from 'react';

export const Home = () => {
  return <main className='home__container'>
            <div className='home__texts'>
                <h2 className='home__subtitle'>So, you want to travel to</h2>
                <h1 className='home__title'>SPACE</h1>
                <p className='home__paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</p>
            </div>
            <div className='home__button'>
                <button type='button' className='home__cta'>EXPLORE</button>
            </div>
        </main>
};