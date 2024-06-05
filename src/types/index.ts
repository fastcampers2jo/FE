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
  data:{
    name: string;
    toprage: number;
    rage: number;
    love: boolean;
    text: string;
    id: number;
    tag: string[];
  }[]
}
