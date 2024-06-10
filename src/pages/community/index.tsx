import { SNSShare, ThumbsUp, IcBack, IcBell, IcMypage } from "assets";
import "./community.scss";
import { useNavigate, useParams } from "react-router-dom";
import ProductsVote from "components/vote";
import PostComment from "components/comment";
import { lounge } from "mock";
import { useState } from "react";

const CommunityPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  // id가 없을 경우 전체 게시글을 보여줌
  const selectedPost = id ? lounge.find((post) => post.id === parseInt(id, 10)) : null;
  const [goodCount, setGoodCount] = useState(selectedPost ? selectedPost.post[0].good : 0);
  // 버튼 클릭 여부를 상태로 관리
  const [isClicked, setIsClicked] = useState(false);

  // good 값 증가/감소 함수
  const toggleGoodCount = () => {
    if (isClicked) {
      setGoodCount(goodCount - 1);
    } else {
      setGoodCount(goodCount + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div>
      {selectedPost && (
        <div className="communitypost">
          <section className="post__statusbar">
            <IcBack className="community__icon__post" onClick={() => navigate(-1)} />
            <div className="community__title">게시판</div>
            <div className="community__post__icons">
              <IcBell className="community__post__bell" />
              <IcMypage className="community__post__mypage" />
            </div>
          </section>
          <section className="postdetail__section">
            {selectedPost.post.map((post, index) => (
              <div key={index}>
                <div className="post__userInfo">
                  <div className="post__detail__username">{post.name}</div>
                  <div className="post__detail__utils">
                    {post.time} &#8729; 조회 {post.inquiry}
                  </div>
                </div>
                <div className="post__detail__title">{post.title}</div>
              </div>
            ))}
            <ProductsVote data={selectedPost.product} />
            <section className="bottom__utils">
              <div>
                <button type="button" className="post__up" onClick={toggleGoodCount}>
                  <ThumbsUp /> 추천하기 {goodCount}
                </button>
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
      )}
    </div>
  );
};

export default CommunityPage;
