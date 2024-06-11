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
  };
}
export interface IRecommend {
  finPrdtNm: string;
  imageBase64: string;
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
