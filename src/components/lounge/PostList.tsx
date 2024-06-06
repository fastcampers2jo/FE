import { Link } from "react-router-dom";
import { Comment, ThumbsUp, UserSmall } from "assets";
import "../../pages/lounge/lounge.scss";

interface IPostList {
  data: {
    name: string;
    time: string;
    inquiry: number;
    title: string;
    bank: string;
    comment: number;
    good: number;
  }[];
}

const PostList = ({ data }: IPostList) => (
  <>
    {data.map((launge, i) => (
      <Link to="/community" key={i}>
        <div className="post__wrapped">
          <div className="user__info">
            <div className="user__name__wrapped">
              <UserSmall />
              <div className="user__name">{launge.name}</div>
            </div>
            <div className="post__date__wrapped">
              <div className="post__date">{launge.time}</div>

              <div className="post__date view">
                &#8729; 조회 {launge.inquiry}
              </div>
            </div>
          </div>
          <div className="post__main">
            <div className="post__title">{launge.title}</div>
            <div className="post__main__wrapped">
              <div className="post__tag">{launge.bank}</div>
              <div className="post__utils">
                <div className="post__comments">
                  <ThumbsUp />
                  {launge.good}
                </div>

                <div className="post__comments">
                  <Comment />
                  {launge.comment}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </>
);

export default PostList;
