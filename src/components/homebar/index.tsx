import { IcBack, IcBell, IcMypage } from "assets";
import { Link, useNavigate } from "react-router-dom";
import "./likebar.scss";

interface ICategory {
  pagename: string;
}

const MainHomeBar = ({ pagename }: ICategory) => {
  const navigate = useNavigate();

  return (
    <div className="likehomebar__statusbar">
      <IcBack className="homebar__icons__back" onClick={() => navigate(-1)} />
      <span>{pagename}</span>
      <div className="likehomebar__icons">
        <Link to="/alarm">
          <IcBell />
        </Link>
        <Link to="/mypage">
          <IcMypage />
        </Link>
      </div>
    </div>
  );
};

export default MainHomeBar;
