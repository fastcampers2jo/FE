import { IcBack, IcBell, IcCard } from "assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./likebar.scss";
import { useCallback } from "react";

interface ICategory {
  pagename: string;
}

const LikeHomeBar = ({ pagename }: ICategory) => {
  const navigate = useNavigate();
  const location = useLocation();
  const onNavigate = useCallback(() => {
    if (location.pathname.includes("/likelist")) return navigate("/recommend/1");
    navigate(-1);
    if (location.pathname.includes("/comparison")) return navigate("/likelist/1");
    navigate(-1);
  }, [pagename]);

  return (
    <div className="likehomebar__statusbar">
      <IcBack className="homebar__icons__back" onClick={onNavigate} />
      <span>{pagename}</span>
      <div className="likehomebar__icons">
        <Link to="/alarm">
          <IcBell />
        </Link>
        <Link to="/comparison/1">
          <IcCard />
        </Link>
      </div>
    </div>
  );
};

export default LikeHomeBar;
