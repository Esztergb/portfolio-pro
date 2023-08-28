import Portrait from "../../images/profile.jpeg";
// import { Link } from "react-router-dom";
export default function About() {
  return (
    <section className="home my-5">
      <div className="title">
        <h4>About Me</h4>
        {/* <Link to="portfolio">
          <button>View my Projects</button>
        </Link> */}
      </div>
      <div className="portrait">
        <img src={Portrait} alt="self portrait" />
      </div>
    </section>
  );
}
