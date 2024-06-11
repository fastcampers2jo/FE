/* eslint-disable react-hooks/rules-of-hooks */
import { EmptyHeart, Vote, X } from "assets";
import "./community.scss";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import PostVoteForm from "components/vote/PostVoteForm";
import { useMutation } from "@tanstack/react-query";
import { postLounge } from "utils/api";

interface ProductProps {
  id: number;
  name: string;
  bankName: string;
  property: string;
  maxInterest: string;
  defInterest: string;
  isChecked?: boolean;
  logo?: string;
}

const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showPostVoteAdd, setShowPostVoteAdd] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<ProductProps[]>([]); // 선택된 상품 상태 추가
  const [showTags, setShowTags] = useState(false); // 태그 보이기 상태 추가
  const [loungePosts, setLoungePosts] = useState({
    title: "",
    content: "",
    finProductType: "DEPOSIT",
    financialProduct1: "",
    financialProduct2: ""
  });

  const { mutate } = useMutation({
    mutationFn: postLounge,
    onSuccess: (data) => {
      console.log("성공성공성공", data);
      if (data.result.resultCode === 200) {
        navigate(`/community/${data.body.id}`); // 게시글 상세 페이지 경로로 리디렉션
      } else {
        console.error("실패실패실패", data.result.resultMessage);
      }
    },
    onError: (err: { message: string; }) => {
      console.error(err.message);
    },
  });

  const onLoungePost = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate({
        title: loungePosts.title,
        content: loungePosts.content,
        finProductType: "DEPOSIT",
        financialProduct1: loungePosts.financialProduct1,
        financialProduct2: loungePosts.financialProduct2
      });
    },
    [loungePosts, mutate]
  );

  const handleAddPostVote = () => {
    setShowPostVoteAdd(true);
  };

  const handleClosePostVote = () => {
    setShowPostVoteAdd(false);
    setSelectedProducts([]);
    setShowTags(false);
  };

  const handleSelectProducts = (products: ProductProps[]) => {
    setSelectedProducts(products);
    if (products.length > 0) {
      setLoungePosts((prevState) => ({
        ...prevState,
        financialProduct1: products[0].name,
        financialProduct2: products[1] ? products[1].name : "",
      }));
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setLoungePosts((prevState) => ({ ...prevState, title: event.target.value }));
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
    setLoungePosts((prevState) => ({ ...prevState, content: event.target.value }));
  };

  const isActive = title.trim() !== "" && content.trim() !== "";

  const handleShowTags = () => {
    setShowTags(!showTags); // 태그 보이기 상태 토글
  };

  return (
    <div className="newpost">
      <form onSubmit={onLoungePost}>
        <section className="post__statusbar">
          <X className="icon__x statusbar" onClick={() => navigate(-1)} />
          <div className="community__title">글쓰기</div>
          <button type="submit" className={`newpost__upload ${isActive ? "active" : ""}`}>
            등록
          </button>
        </section>
        <section className="newpost__detail">
          <input
            type="textarea"
            placeholder="제목 입력"
            className="newpost--input"
            value={loungePosts.title}
            onChange={handleTitleChange}
          />
          <input
            type="textarea"
            value={loungePosts.content}
            placeholder="내용을 입력해주세요"
            className="newpost--input main"
            onChange={handleContentChange}
          />
          {showPostVoteAdd && <PostVoteForm onClose={handleClosePostVote} onSelectProducts={handleSelectProducts} />}
        </section>

        {showTags && (
          <section className="newpost__products__tag">
            {selectedProducts.map((product) => (
              <div key={product.id} className="newpost__product__tag">
                {product.name}
              </div>
            ))}
          </section>
        )}
        <section className="newpost__bottom__utils">
          <button className={`newpost__bottom__utils--btn ${showTags ? "disabled" : ""}`} onClick={handleShowTags}>
            <EmptyHeart className={`likeproducts__tag  ${showTags ? "disabled" : ""}`} />
            찜한 상품 태그
          </button>
          <button
            className={`newpost__bottom__utils--btn ${showPostVoteAdd ? "disabled" : ""}`}
            onClick={handleAddPostVote}
            disabled={showPostVoteAdd}
          >
            <Vote className={`likeproducts__tag ${showPostVoteAdd ? "disabled" : ""}`} />
            투표 항목 추가
          </button>
        </section>
      </form>
    </div>
  );
};

export default NewPost;
