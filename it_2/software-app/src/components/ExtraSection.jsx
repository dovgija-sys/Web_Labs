import site from '../data/site.json';

function ExtraSection() {
  return (
    <aside className="panel" id="gallery">
      <h2>Галерея</h2>
      <p className="panel-intro">Приклади екранів програми.</p>
      <div className="gallery-list">
        {site.slides.map((slide) => (
          <figure className="gallery-item" key={slide.id}>
            <img
              alt={slide.alt}
              src={`${process.env.PUBLIC_URL}${slide.image.slice(1)}`}
            />
            <figcaption>{slide.caption}</figcaption>
          </figure>
        ))}
      </div>
    </aside>
  );
}

export default ExtraSection;
