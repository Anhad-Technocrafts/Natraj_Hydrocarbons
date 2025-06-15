import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { EffectCube } from "swiper/modules";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function HeroSection({ data }) {
  // const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <>
      <section className="cs_hero cs_style_1 cs_heading_bg cs_white_color">
        <div className="container">
          <div className="cs_hero_in">
            <div className="cs_hero_text">
              <h1
                className="cs_hero_title cs_fs_60 cs_normal cs_mb_6 cs_white_color cs_gradient_color_1 wow fadeInUp"
                data-aos="fade-up"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />

              <p
                className="cs_hero_subtitle cs_fs_20 cs_mb_18 cs_opacity_7_5"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              ></p>

              <div className="cs_hero_btns">
                <a
                  href={data.btnUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-left"
                  className="cs_btn cs_style_2 cs_bold cs_white_color wow fadeInRight"
                >
                  {data.btnText2}
                </a>
                <Link
                  to={data.btnUrl1}
                  data-aos="fade-right"
                  className="cs_btn cs_style_1 cs_bold cs_heading_color cs_white_bg wow fadeInLeft"
                >
                  {data.btnText1}
                </Link>
                {/* <Link
                  to={data.btnUrl2}
                  data-aos="fade-left"
                  className="cs_btn cs_style_2 cs_bold cs_white_color wow fadeInRight"
                >
                  {data.btnText2}
                </Link> */}
              </div>
            </div>
            <div className="cus_hero_imagecomparer_container wow fadeInRight">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="/assets/img/waste_plastic_hero.png" alt="Waste Plastic" />}
                itemTwo={<ReactCompareSliderImage src="/assets/img/nhc_fuel_to_factory_hero.png" alt="Super Fuel" />}
                position={10}
                transition=".5s ease-in-out"
                className="cus_compareslider"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
