import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { Component } from 'react'
import Slider from 'react-slick'
import { list } from './data'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import Crousal from './Crousal'

const SlickCrousal = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  }
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((people) => {
          return (
            <article key={people.id}>
              <img
                src={people.image}
                alt={people.name}
                className="person-img"
              />
              <h5 className="name">{people.name}</h5>
              <p className="title">{people.title}</p>
              <p className="text">{people.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
      </Slider>
    </section>
  )
}
export default SlickCrousal
