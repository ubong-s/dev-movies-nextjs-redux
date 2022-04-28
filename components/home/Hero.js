import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
   AiFillCaretRight,
   AiFillCaretLeft,
   AiOutlineArrowRight,
   AiOutlineArrowLeft,
} from 'react-icons/ai';
import styled from 'styled-components';
import { breakpoints, variables, dimensions } from '../../styles/globalStyle';
import { Button } from '..';
import { formatSlug } from '../../utils/helpers';

const Hero = ({ slides = [] }) => {
   const [current, setCurrent] = useState(0);
   const length = slides.length;

   useEffect(() => {
      if (current < 0) {
         setCurrent(slides.length - 1);
      }

      if (current > slides.length - 1) {
         setCurrent(0);
      }
   }, [current, slides]);

   useEffect(() => {
      let slider = setInterval(() => {
         setCurrent(current + 1);
      }, 6000);
      return () => clearInterval(slider);
   }, [current]);

   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
   };
   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
   };

   if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
   }

   return (
      <HeroSlider>
         <SliderIcons>
            <AiOutlineArrowLeft
               className='arrow left-arrow'
               onClick={prevSlide}
            />
            <span>
               {Array.from(Array(length).keys()).map((i) => {
                  return (
                     <p key={i} className={i === current ? 'active' : ''}>
                        {i + 1}
                     </p>
                  );
               })}
            </span>
            <AiOutlineArrowRight
               className='arrow right-arrow'
               onClick={nextSlide}
            />
         </SliderIcons>

         {slides.map((slide, index) => {
            const {
               id,
               backdrop_path,
               poster_path,
               title,
               tagline,
               overview,
               runtime,
               release_date,
            } = slide;
            return (
               <article
                  className={
                     index === current ? 'slide-img active' : 'slide-img'
                  }
                  key={id}
               >
                  {index === current && (
                     <>
                        {/* desktop */}
                        <div className='img desktop'>
                           <Image
                              src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                              alt={title}
                              height={500}
                              width={1000}
                              layout='responsive'
                           />
                        </div>
                        {/* Mobile */}
                        <div className='img mobile'>
                           <Image
                              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                              alt={title}
                              height={650}
                              width={400}
                              layout='responsive'
                              // className='img mobile'
                           />
                        </div>
                        <div className='slide-img-info'>
                           <h1>{slide.title}</h1>
                           <p>{slide.overview.substring(0, 200)}...</p>
                           <Button
                              title='Find out More'
                              linkText={`/movies/${id}-${formatSlug(title)}`}
                           />
                        </div>{' '}
                     </>
                  )}
               </article>
            );
         })}
      </HeroSlider>
   );
};

export default Hero;

const HeroSlider = styled.section`
   padding: 0;
   position: relative;
   height: calc(100vh - ${dimensions.headerHeight.mobile});
   overflow: hidden;

   /* @media screen and (min-width: ${breakpoints.tablet}px) {
      height: 80vh;
   } */
   @media screen and (min-width: ${breakpoints.desktop}px) {
      height: 100vh;
   }

   .slide-img {
      opacity: 0;
      transition: all 0.3s linear;

      .img {
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         object-fit: cover;

         img {
            object-fit: cover;
            object-position: top;
         }

         &.desktop {
            display: none;
         }

         @media screen and (min-width: ${breakpoints.desktop}px) {
            &.mobile {
               display: none;
            }

            &.desktop {
               display: block;
            }

            img {
               object-position: top;
            }
         }
      }

      &-info {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -65%);
         width: 100%;
         text-align: center;
         padding: 0 2rem;
         z-index: 2;

         h1 {
            color: ${(props) => props.theme.text};
            font-size: 2.5rem;
         }

         p {
            color: ${(props) => props.theme.text};
            margin-bottom: 1.5rem;
         }

         @media screen and (min-width: ${breakpoints.desktop}px) {
            left: 5%;
            top: unset;
            bottom: 20%;
            width: 60%;
            text-align: left;
            padding: unset;
            padding-right: 2rem;
            transform: translate(0);

            h1 {
               text-transform: capitalize;
               line-height: 1.3;
               font-size: 4rem;
            }

            p {
               font-size: 1rem;
               padding: 0;
            }
         }
      }

      &::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         /* background: rgba(0, 0, 0, 0.5); */
         background: ${(props) => props.theme.gradient3};
         z-index: 1;
      }
   }

   .slide-img.active {
      opacity: 1;
      transition: ${variables.misc.transitionEase};
   }
`;
const SliderIcons = styled.div`
   position: absolute;
   display: flex;
   align-items: flex-end;
   font-size: 1.5rem;
   left: 50%;
   bottom: 7.5%;
   transform: translateX(-50%);
   z-index: 4;
   color: ${(props) => props.theme.text};

   span {
      display: flex;
      align-items: flex-end;
      gap: 2.5rem;

      p {
         margin-bottom: 0;
         transition: ${variables.misc.transitionEase};
         font-family: ${variables.fonts.primary};
         line-height: 1;

         &.active {
            transform: scale(2.5) translateY(-0.25rem);
            color: ${(props) => props.theme.accent};
            transition: ${variables.misc.transitionEase};
         }
      }
   }

   .arrow {
      cursor: pointer;
      color: ${(props) => props.theme.text};
      user-select: none;
      transition: ${variables.misc.transitionEase};
      margin: 0 2.5rem;
      font-size: 2rem;

      &:hover {
         color: ${(props) => props.theme.accent};
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}px) {
      font-size: 3rem;
      left: unset;
      right: 5%;
      transform: translateX(0);

      span {
         gap: 3rem;

         p {
            &.active {
               transform: scale(2) translateY(-0.5rem);
            }
         }
      }

      .arrow {
         font-size: 2.5rem;
         margin: 0;

         &.right-arrow {
            margin-left: 2.5rem;
         }

         &.left-arrow {
            margin-right: 2.5rem;
         }
      }
   }
`;
