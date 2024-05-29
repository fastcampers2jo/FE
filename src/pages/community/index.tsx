import { Back, Bell, Post, Mypage, Search } from "assets";
import "./community.scss";
import PostList from "../../components/lounge/PostList";

const CommunityPage = () => (
  <>
    <div className="logobar">
      <Back className="back" />
      <span>게시판</span>
      <div className="icons">
        <Bell className="bell" />
        <Mypage className="mypage" />
      </div>
    </div>
    <form className="search__section">
      <label className="search">
        <input type="text" placeholder="원하시는 금융상품을 검색해 보세요!" />
        <button type="submit" className="search--btn">
          <Search />
        </button>
      </label>
      <div className="post__add--btn">
        <Post className="post__toggle" />
      </div>
    </form>
    <form className="post__section" />
    <div className="postlist">
      <PostList />
    </div>
  </>
);

export default CommunityPage;
