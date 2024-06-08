import { EmptyHeart, Vote, X } from "assets";
import "./community.scss";
import PostVote from "components/vote/PostVote";
import { useNavigate } from "react-router-dom";

const newPost = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  return (
    <div className="newpost">
      <section className="post__statusbar">
        <X className="icon__x" onClick={() => navigate(-1)} />
        <div className="community__title">글쓰기</div>
        <div className="newpost__upload">등록</div>
      </section>
      <section className="newpost__detail">
        <input type="textarea" placeholder="제목 입력" className="newpost--input" />
        <input type="textarea" placeholder="내용을 입력해주세요" className="newpost--input main" />
      </section>
      <PostVote />
      <section className="newpost__products__tag">
        <div className="newpost__product__tag">DGB함께예금</div>
        <div className="newpost__product__tag">NH고향사랑기부예금</div>
      </section>
      <section className="newpost__bottom__utils">
        <div className="newpost__bottom__utils--btn">
          <EmptyHeart className="likeproducts__tag" />
          찜한 상품 태그
        </div>
        <div className="newpost__bottom__utils--btn">
          <Vote className="likeproducts__tag" />
          투표 항목 추가
        </div>
      </section>
    </div>
  );
};

export default newPost;
