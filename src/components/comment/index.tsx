import { UpArrow } from "assets";
import "./PostComment.scss";

const PostComment = () => (
  <>
    <div className="postcomment">
      <section className="comment__utils">
        <div className="comment__utils__text">댓글 3</div>
        <div className="comment__utils__text">
          <div className="comment__utils__text tab active">등록순</div>
          <div className="comment__utils__text tab">최신순</div>
        </div>
      </section>
      <section className="commentsmain">
        <section className="comments">
          <div className="comment__info">
            테스팅
            <div className="comment__time">12분 전</div>
          </div>
          <div className="comment__detail">이번에 바꾼 예금 OO을 추천해요!</div>
          <div className="comment__reply">답글달기</div>
        </section>
        <section className="comments">
          <div className="comment__info">
            으아아악아
            <div className="comment__time">4분 전</div>
          </div>
          <div className="comment__detail">으아앙어웆어유유유ㅠㅠㅠ</div>
          <div className="comment__reply">답글달기</div>
        </section>
      </section>
    </div>
    <section className="newcomments">
      <input type="textarea" placeholder="댓글추가..." className="comment--input" />
      <UpArrow className="upload" />
    </section>
  </>
);

export default PostComment;
