export interface Login {
  email: string;
  password: string;
}

export interface Sign extends Login {
  name: string;
}

export interface isLogin {
  body: {
    name: string;
    email: string;
  };
  result: {
    resultCode: number;
    resultMessage: string;
    resultDescription: string;
  };
}

export interface IBank {
  content: {
    finProductType: string;
    financeDetailDto: {
      bankImageUrl: string;
      finPrdtNm: string;
      financeId: string;
      intrRate2Show: number;
      intrRateShow: number;
      joinWayList: string[];
      korCoNm: string;
      isLiked: boolean;
    };
  }[];
}
export interface IBanks {
  finProductType: string;
  financeDetailDto: {
    bankImageUrl: string;
    finPrdtNm: string;
    financeId: string;
    intrRate2Show: number;
    intrRateShow: number;
    joinWayList: string[];
    korCoNm: string;
    isLiked:boolean

  };
}
export interface IRecommend {
  finPrdtNm: string;
  intrRate2Show: number;
  intrRateShow: number;
  korCoNm: string;
  bankImageUrl: string;
  tagList: string[];
  financeType:string;
  financeId: string;
  isLiked: boolean;
}

export interface Like {
  id: string;
  type: string;
}

export interface Finances {
  id1: string;
  id2: string;
  type: string;
}

export interface Compare {
  id1: string;
  id2: string;
  type: string;
}

export interface LoungePost {
  title: string;
  content: string
  finProductType: "DEPOSIT";
  financialProduct1: string
  financialProduct2: string
}
export interface ILike {
  finProductType: string;
  likedFinanceDto: {
    bankImageUrl: string;
    finPrdtNm: string;
    id: string;
    intrRate2Show: number;
    intrRateShow: number;
    joinWayList: string[];
    korCoNm: string;
  };
}

export interface ILikes {
  body: {
    finProductType: string;
    likedFinanceDto: {
      bankImageUrl: string;
      finPrdtNm: string;
      id: string;
      intrRate2Show: number;
      intrRateShow: number;
      joinWayList: string[];
      korCoNm: string;
    };
  }[]
}
export interface LikeDel {
  ids: string[];
  finProductType: string;
}
