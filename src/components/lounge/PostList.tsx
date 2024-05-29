import "../../pages/lounge/lounge.scss";
import { RightArrow } from "assets";

const PostList = () => (
  <form className="lounge__notice">
    <div className="product__categories">
      <div className="product__category active">전체</div>
      <div className="product__category">탭명</div>
      <div className="product__category">탭명</div>
      <div className="product__category">탭명</div>
      <div className="product__category">탭명</div>
      <div className="product__category">탭명</div>
    </div>
    <div className="post__section">
      <div className="post__wrapped">
        <div className="user__info">
          <div className="user__name">신화속 엘프</div>
          <div className="post__date">5분전</div>
          <div className="post__date view">조회 12</div>
        </div>
        <div className="post__main">
          <div className="post__title">이 예금 어떤가요?</div>
          <div className="post__main__wrapped">
            <div className="post__preview">
              KDB 정기 예금
              <RightArrow />
            </div>
            <div className="post__comments">댓글 2</div>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default PostList;
