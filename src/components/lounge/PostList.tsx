import { Comment, ThumbsUp, UserSmall } from "assets";
import "../../pages/lounge/lounge.scss";

const PostList = () => (
  <form className="lounge__notice">
    <div className="post__section">
      <div className="post__wrapped">
        <div className="user__info">
          <div className="user__name__wrapped">
            <UserSmall />
            <div className="user__name">신화속 엘프</div>
          </div>
          <div className="post__date__wrapped">
            <div className="post__date">15분전</div>

            <div className="post__date view">&#8729; 조회 23</div>
          </div>
        </div>
        <div className="post__main">
          <div className="post__title">갑자기 삘받아서 예금 넣을 생각인데 이거 어때요??</div>
          <div className="post__main__wrapped">
            <div className="post__tag">KDB 기업정기예금</div>
            <div className="post__utils">
              <div className="post__comments">
                <ThumbsUp />
                50
              </div>

              <div className="post__comments">
                <Comment />
                12
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post__wrapped">
        <div className="user__info">
          <div className="user__name__wrapped">
            <UserSmall />
            <div className="user__name">신화속 엘프</div>
          </div>
          <div className="post__date__wrapped">
            <div className="post__date">15분전</div>

            <div className="post__date view">&#8729; 조회 23</div>
          </div>
        </div>
        <div className="post__main">
          <div className="post__title">갑자기 삘받아서 예금 넣을 생각인데 이거 어때요??</div>
          <div className="post__main__wrapped">
            <div className="post__tag">KDB 기업정기예금</div>
            <div className="post__utils">
              <div className="post__comments">
                <ThumbsUp />
                50
              </div>

              <div className="post__comments">
                <Comment />
                12
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post__wrapped">
        <div className="user__info">
          <div className="user__name__wrapped">
            <UserSmall />
            <div className="user__name">신화속 엘프</div>
          </div>
          <div className="post__date__wrapped">
            <div className="post__date">15분전</div>

            <div className="post__date view">&#8729; 조회 23</div>
          </div>
        </div>
        <div className="post__main">
          <div className="post__title">갑자기 삘받아서 예금 넣을 생각인데 이거 어때요??</div>
          <div className="post__main__wrapped">
            <div className="post__tag">KDB 기업정기예금</div>
            <div className="post__utils">
              <div className="post__comments">
                <ThumbsUp />
                50
              </div>

              <div className="post__comments">
                <Comment />
                12
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default PostList;
