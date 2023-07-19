import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Draggable, { DraggableCore } from 'react-draggable';

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
      <Draggable>
        <div className="flex gap-11 justify-center w-max">
          {data.map((item) => (
            <div key={item.id} className="w-96">
              <Link to={item.userLink}>
                <img src={item.imageUrl} />
              </Link>
              <p>{item.userName}</p>
            </div>
          ))}
        </div>
      </Draggable>
    </>
  );
};

export default Carousel;
