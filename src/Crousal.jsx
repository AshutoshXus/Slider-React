import React, { useEffect, useState } from "react";
import { shortList, longList, list } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Crousal = () => {
  const [short, setShort] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + short.length) % short.length;
      return result;
    });
  };
  const nextSlide = () => {
    console.log("hello");
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % short.length;
      console.log(result);
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {short.map((people, personIndex) => {
        return (
          <article
            key={people.id}
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
          >
            <img src={people.image} alt={people.name} className="person-img" />
            <h5 className="name">{people.name}</h5>
            <p className="title">{people.title}</p>
            <p className="text">{people.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button
        type="button"
        className="prev"
        onClick={() => {
          prevSlide();
        }}
      >
        <FiChevronLeft></FiChevronLeft>
      </button>

      <button
        type="button"
        className="next"
        onClick={() => {
          nextSlide();
        }}
      >
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Crousal;
