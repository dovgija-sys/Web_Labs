import { useEffect, useState } from 'react';
import site from '../data/site.json';
import './Header.css';

function Header() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = site.slides[slideIndex];
  const imagePath = `${process.env.PUBLIC_URL}${slide.image.slice(1)}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((index) => (index + 1) % site.slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header id="about">
      <div className="header-top">
        <div>
          <p className="header-label">Програмний продукт</p>
          <h1>{site.title}</h1>
          <p className="header-about">{site.about}</p>
        </div>
        <div className="slider">
          <img src={imagePath} alt={slide.alt} />
          <p>{slide.caption}</p>
          <div className="slider-buttons">
            {site.slides.map((item, index) => (
              <button
                aria-label={`Показати: ${item.caption}`}
                className={index === slideIndex ? 'selected' : ''}
                key={item.id}
                onClick={() => setSlideIndex(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
      <nav className="navigation" aria-label="Головне меню">
        <strong>Меню</strong>
        <div>
          {site.menu.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
