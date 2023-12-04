import { sidebarLinks } from "../../../constants/index.ts";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../button";

const LeftSideBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to={"/"} className="flex gap-3 items-center">
          <img
            src="../../assets/images/logo.svg"
            alt="Logo"
            width={170}
            height={36}
          />
        </Link>
      </div>

      <div className="flex gap-3 items-center">
        <img
          src="../../assets/icons/profile-placeholder.svg"
          alt="profile"
          className="h-14 w-14 rounded-full"
        />
        <div className="flex flex-col body-bold">
          <p className="  ">USER NAME</p>
          <p className="small-regular text-light-3">@username</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link  ${isActive && `bg-primary-500`}`}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4 "
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hower:invert-white ${
                      isActive && `invert-white`
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Button variant="ghost" className="shad-button_ghost">
        <img src="../../assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSideBar;
