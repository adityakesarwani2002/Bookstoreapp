import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from "./Cards";

export default function Freebook() {
     const filterData = list.filter((data)=>data.category==="Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
    <>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit,
        animi placeat rem repellendus laboriosam natus provident, similique illo
        laudantium illum dolorem totam tenetur consectetur laborum eius sunt
        voluptates amet repellat nulla, fuga culpa doloremque voluptate porro.
        Provident quibusdam ullam dolorum harum eveniet a, natus ipsum corrupti,
        nostrum impedit optio!
      </p>
    </div>
    <div>
      <Slider {...settings}>
      {filterData.map((item)=>(
         <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </>
  );
}
