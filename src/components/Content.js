import Header from "./Header";
import Wallpaper from "./Wallpaper";

const Content = () => {
  return (
    <div className="header">
      <div className="container">
        <Header />
        <Wallpaper />
      </div>

      <style jsx>{`
        .header {
          width: 100%;
          height: 100vh;
          padding-left: 18rem;
          padding-right: 18rem;
          padding-top: 15rem;
          padding-bottom: 5rem;
          color: var(--color-secondary);
          background-color: var(--color-primary);
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default Content;
