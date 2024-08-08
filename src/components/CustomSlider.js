import React, { useRef, useImperativeHandle, forwardRef, useEffect  } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CustomSlider = (props) => {
    const { currentIndex=()=>{}, setIndex } = props;
    const sliderRef = useRef(null);

    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(currentIndex)
      }
    }, [currentIndex])
  
    const settings = {
      dots: false,
      infinite: true,
      autoPlay: true,
      arrow: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => setIndex(next),
    };

    const slickPrev = () => sliderRef && sliderRef.current.slickPrev();
    const slickNext = () => sliderRef && sliderRef.current.slickNext();
  
    return (
      <>
        <div className="slider-container">
          <Slider {...settings} ref={sliderRef}>
            <div style={{ backgroundColor: '#aaa' }}>
              <h3>111111111111111111111111111111111111111111111111</h3>
            </div>
            <div style={{ backgroundColor: '#ccc' }}>
              <h3>222222222222222222222222222222222222222222222222</h3>
            </div>
            <div>
              <h3>3333333333333333333333333333333333333333333333333</h3>
            </div>
          </Slider>
        </div>
        {/* <div className='arrow arrow-prev' onClick={slickPrev}>prev</div> */}
        {/* <div className='arrow arrow-next' onClick={slickNext}>next</div> */}
      </>

    );
};
  
/* 
  // progress bar와 같이 쓰기
  const [currentSlide, setCurrentSlide] = useState(0);

  <CustomSlider currentIndex={slideIdx} setIndex={(i) => setSlideIdx(i)} />
  <ProgressBar  currentIndex={slideIdx} setIndex={setSlideIdx} totalSlides={3} />
*/

/* // 밖에서 함수 쓰기 (forwardRef 필요함)
    useImperativeHandle(ref, () => ({
      slickNext: () => sliderRef.current.slickNext(),
      slickPrev: () => sliderRef.current.slickPrev(),
      slickGoTo: (index) => sliderRef.current.slickGoTo(index),
    }));
*/