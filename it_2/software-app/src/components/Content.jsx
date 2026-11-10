import site from '../data/site.json';

function Content() {
  return (
    <section className="panel" id="features">
      <h2>Можливості програми</h2>
      <p className="panel-intro">
        Forma допомагає впорядкувати проєкт і тримати важливі завдання під рукою.
      </p>
      <div className="feature-list">
        {site.features.map((feature, index) => (
          <article className="feature-card" key={feature.id}>
            <span className="feature-number">0{index + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Content;
