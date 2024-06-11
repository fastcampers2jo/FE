import { SNSShare, ThumbsUp, IcBack, IcBell, IcMypage } from "assets";
import "./community.scss";
import { useNavigate, useParams } from "react-router-dom";
import ProductsVote from "components/vote";
import PostComment from "components/comment";
import { lounge } from "mock";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getLounge } from "utils/api";

const CommunityPage = () => {
  const navigate = useNavigate();

  // 목 데이터 용///
  const { id } = useParams<{ id: string }>();
  const selectedPost = id ? lounge.find((post) => post.id === parseInt(id, 10)) : null;
  const [goodCount, setGoodCount] = useState(selectedPost ? selectedPost.post[0].good : 0);
  const [isClicked, setIsClicked] = useState(false);
  /// api 연동 데이터 용 ///
  const { postId } = useParams<{ postId: string }>();
  const { data: postLoungeDetail, error, isLoading } = useQuery(
    {
      queryKey: ["", "postLoungeDetail"],
      queryFn: getLounge,
      enabled: !!postId && !selectedPost // API 호출을 postId가 있고, selectedPost가 없을 때만 실행
    });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

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
      {selectedPost ? (
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
      ) : (
        postLoungeDetail && (
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
              <div>
                <div className="post__userInfo">
                  <div className="post__detail__username">{postLoungeDetail.username}</div>
                  <div className="post__detail__utils">
                    {postLoungeDetail.createdDate} &#8729; 조회 {postLoungeDetail.viewCount}
                  </div>
                </div>
                <div className="post__detail__title">{postLoungeDetail.title}</div>
                <div className="post__detail__context">{postLoungeDetail.content}</div>
              </div>
              <ProductsVote data={postLoungeDetail.products} />
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
        )
      )}
    </div>
  );
};

export default CommunityPage;
