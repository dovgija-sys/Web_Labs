import site from '../data/site.json';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <span>{site.contact.author}</span>
      <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
      <a href={site.contact.github} target="_blank" rel="noreferrer">GitHub</a>
      <span>© {new Date().getFullYear()} Forma</span>
    </footer>
  );
}

export default Footer;
