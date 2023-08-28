import Portrait from '../../images/profile.jpeg';
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hey, I am Eszter Barbuscia</h2>
        <h4>Welcome to my Portfolio!</h4>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img src={Portrait} alt="self portrait" />
      </div>
    </section>
  );
}
