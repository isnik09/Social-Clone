import { Link } from "react-router-dom";
import { Button } from "../button";

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5"></div>
      <Link to={"/"} className="flex gap-3 items-center">
        <img
          src="../../assets/images/logo.svg"
          alt="Logo"
          width={130}
          height={325}
        />
      </Link>

      <div className="flex gap-4">
        <Button variant="ghost" className="shad-button_ghost">
          <img src="../../assets/icons/logout.svg" alt="logout" />
        </Button>
      </div>
    </section>
  );
};

export default Topbar;
