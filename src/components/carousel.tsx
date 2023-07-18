import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type CarouselItem = {
  id: number;
  imageUrl: string;
  userName: string;
  userLink: string;
  imgAlt: string;
};

type CarouselProps = {
  data: CarouselItem[];
};

//componente do carrossel da main (ainda WIP)
const Carousel = ({ data }: CarouselProps) => {
  return (
    <>
      <div className="flex gap-11 justify-center">
        {data.map((item) => (
          <div key={item.id}>
            <Link to={item.userLink}>
              <img src={item.imageUrl} className="w-96" />
            </Link>
            <p>{item.userName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
