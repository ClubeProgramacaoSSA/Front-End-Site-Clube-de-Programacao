import React from 'react';
import { Link } from 'react-router-dom';

interface CarouselItem {
  id: number;
  imageUrl: string;
  userName: string;
  userLink: string;
  imgAlt: string;
}

interface CarouselProps {
  data: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  return (
    <>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <Link to={item.userLink}>
              <img src={item.imageUrl} />
            </Link>
            <p>{item.userName}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
