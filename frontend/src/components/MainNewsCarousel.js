import React, { useEffect, useRef } from 'react';


const MainNewsCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const options = {
      items: 1,
      autoplay: true,
      autoplayTimeout: 2000,
      dots: true,
      loop: true,
    };

    if (carouselRef.current) {
        window.$(carouselRef.current).owlCarousel(options);
    }
  }, []);

  return (
    <div className="main-news-carousel">
      <div ref={carouselRef} id="owl-demo" className="owl-carousel owl-theme">
        <div className="carousel-item">
          <img src="/images/carousel1.jpg" alt="News 1" />
          <div className="carousel-text">
            <h1>خلافا للاعتقاد</h1>
            <hr />
            <p>لوريم إيبسوم ليس نصاً عشوائيا، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد،
                 مما يجعله أكثر من 2000 عام في القدم
            </p>
            <button>المزيد</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/carousel2.jpg" alt="News 2" />
          <div className="carousel-text">
            <h1>خلافا للاعتقاد</h1>
            <hr />
            <p>لوريم إيبسوم ليس نصاً عشوائيا، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد،
                 مما يجعله أكثر من 2000 عام في القدم
            </p>
            <button>المزيد</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/carousel1.jpg" alt="News 1" />
          <div className="carousel-text">
            <h1>خلافا للاعتقاد</h1>
            <hr />
            <p>لوريم إيبسوم ليس نصاً عشوائيا، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد،
                 مما يجعله أكثر من 2000 عام في القدم
            </p>
            <button>المزيد</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/carousel2.jpg" alt="News 2" />
          <div className="carousel-text">
            <h1>خلافا للاعتقاد</h1>
            <hr />
            <p>لوريم إيبسوم ليس نصاً عشوائيا، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ العام 45 قبل الميلاد،
                 مما يجعله أكثر من 2000 عام في القدم
            </p>
            <button>المزيد</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MainNewsCarousel;