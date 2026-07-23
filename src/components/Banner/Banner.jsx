import { Link } from "react-router";
import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-3xl mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between py-16">

        <img
          src={hero}
          alt="Hero"
          className="w-[450px]"
        />

        <div>
          <h1 className="text-6xl font-bold leading-tight">
            Books to freshen up <br />
            your bookshelf
          </h1>

          <Link
            to="/listed-books"
            className="btn btn-success mt-8"
          >
            View The List
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Banner;