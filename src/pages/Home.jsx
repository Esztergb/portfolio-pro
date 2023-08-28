import Portrait from '../../images/profile.jpeg';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hey, I am Noah Hoang</h2>
        <p>Welcome to my Portfolio!</p>
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
