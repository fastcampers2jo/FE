import "./comparison.scss";

const ComparisonProducts = () => (
  <form className="mycomparison">
    <div>Chak 비교해본</div>
    <div className="my__title">
      나의
      <div className="greenbar" />
      실수령액은
    </div>
    <div className="products">
      <div className="product">
        900,000 <span>원</span>
        <button type="button" className="detail">
          자세히보기
        </button>
      </div>
      <div className="product">
        700,000 <span>원</span>
        <button type="button" className="detail">
          자세히보기
        </button>
      </div>
    </div>

    <div className="title">나의 금리를 확인하세요!</div>
    <div className="my__checks__wrapped">
      <div className="my__checks">
        <div>7%</div>

        <div className="my__check">
          <div className="checklist">기본</div>
          <div>3%</div>
        </div>
        <div className="my__check">
          <div className="checklist">급여실적 또는 개인사업자 계좌실적</div>
          <div>3%</div>
        </div>
      </div>
      <div className="my__checks">
        <div>3%</div>

        <div className="my__check">
          <div className="checklist">기본</div>
          <div>3%</div>
        </div>
        <div className="my__check">
          <div className="checklist">마케팅 동의</div>
          <div>1%</div>
        </div>
        <div className="my__check">
          <div className="checklist">에너지 절감</div>
          <div>1%</div>
        </div>
      </div>
    </div>

    <div className="title">이자 </div>
    <div className="my__interests">
      <div className="my__interest">
        100,000<span>원</span>
      </div>
      <div className="my__interest">
        100,000<span>원</span>
      </div>
    </div>
  </form>
);

export default ComparisonProducts;
