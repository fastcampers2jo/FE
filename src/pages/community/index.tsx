import { Back, Bell, Mypage, SNSShare, ThumbsUp } from "assets";
import "./community.scss";
import { useNavigate } from "react-router-dom";
import ProductsVote from "components/vote";
import PostComment from "components/comment";
import VotingResults from "components/vote/VotingResults";

const CommunityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="communitypost">
      <section className="post__statusbar">
        <Back className="icon__post" onClick={() => navigate(-1)} />
        <div className="community__title">게시판</div>
        <div className="icons">
          <Bell className="bell" />
          <Mypage className="mypage" />
        </div>
      </section>
      <section className="postdetail__section">
        <div className="post__userInfo">
          <div className="post__detail__username">신화속엘프</div>
          <div className="post__detail__utils">15분전 &#8729;조회 23</div>
        </div>
        <div className="post__detail__title">20대 주택청약 상품 골라주세요!!!</div>
        <ProductsVote />
        <VotingResults />
        <section className="bottom__utils">
          <div className="post__up">
            <ThumbsUp /> 추천하기 4
          </div>
          <div className="post__up">
            <SNSShare /> 공유하기
          </div>
        </section>
      </section>
      <section className="post__detail__comments">
        <PostComment />
      </section>
    </div>
  );
};

export default CommunityPage;
