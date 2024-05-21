import { Bell, Mypage, RightArrow } from "assets";
import "./lounge.scss";
import { Link } from "react-router-dom";
import PostList from "components/lounge/PostList";
import HotTopic from "components/lounge/HotIssue";

const LoungePage = () => (
  <>
    <div className="logobar">
      <span>Logo</span>
      <div className="icons">
        <Bell className="bell" />
        <Mypage className="mypage" />
      </div>
    </div>
    <HotTopic />
    <div className="header">
      <Link to="/community" className="page__title">
        게시판 <RightArrow className="arrow--right" />
      </Link>
      <Link to="/post" className="post--btn">
        글쓰기
      </Link>
    </div>
    <PostList />
  </>
);

export default LoungePage;
