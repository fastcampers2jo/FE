import { Link } from "react-router-dom";
import { Comment, ThumbsUp, UserSmall } from "assets";
import "../../pages/lounge/lounge.scss";

interface IProduct {
  def_rate: number;
  max_rate: number;
  bank_name: string;
  title: string;
  voteCount: number;
}

interface IPost {
  name: string;
  time: string;
  inquiry: number;
  title: string;
  comment: number;
  good: number;
}

interface IData {
  id: number;
  post: IPost[];
  product: IProduct[];
}

interface IPostList {
  data: IData[];
}

const PostList = ({ data }: IPostList) => (
  <div className="postlist">
    {data.map((item) => (
      <div key={item.id}>
        {item.post.map((post, index) => (
          <div key={index}>
            <Link to={`/community/${item.id}`}>
              <div className="post__wrapped">
                <div className="user__info">
                  <div className="user__name__wrapped">
                    <UserSmall />
                    <div className="user__name">{post.name}</div>
                  </div>
                  <div className="post__date__wrapped">
                    <div className="post__date">{post.time}</div>
                    <div className="post__date view">&#8729; 조회 {post.inquiry}</div>
                  </div>
                </div>
                <div className="post__main">
                  <div className="post__title">{post.title}</div>
                  <div className="post__main__wrapped">
                    <div className="post__tag__wrapped">
                      {item.product.map((product, idx) => (
                        <div className="post__tag" key={idx}>
                          {product.title}
                        </div>
                      ))}
                    </div>
                    <div className="post__utils">
                      <div className="post__comments">
                        <ThumbsUp />
                        {post.good}
                      </div>
                      <div className="post__comments">
                        <Comment />
                        {post.comment}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default PostList;
