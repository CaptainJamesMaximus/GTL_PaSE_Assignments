import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <h1 className="title">Mavel's Fearless</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
        molestias earum eveniet.
      </p>

      <div className="search-bar"></div>
      <input type="search" placeholder="Search" />

      <style jsx>{`
        .title,
        .subtitle {
          width: 60rem;
          max-width: 100%;
        }

        .title {
          font-size: 7.2rem;
        }

        .subtitle {
          margin-bottom: 3rem;
        }

        .search-bar {
          width: 30rem;
          max-width: 100%;
          margin-bottom: 8rem;
          border-bottom: 2px solid var(--color-tertiary);

          position: relative;
          font-size: 1.6rem;
        }

        .search-bar input {
          width: 100%;
          height: 100%;
          border: 0;
          outline: none;
          font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </Fragment>
  );
};

export default Header;
