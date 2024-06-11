import { baseAxios } from "utils/instance";
import * as I from "types";

export const login = async (data: I.Login) => {
  const res = await baseAxios.post("/api/v1/users/login", data);
  return res.data;
};

export const signup = async (data: I.Sign) => {
  const res = await baseAxios.post("/api/v1/users/join", data);
  return res.data;
};

export const keepLogin = async () => {
  const res = await baseAxios.get("/api/v1/users/me");
  return res.data;
};

export const kakaoLogin = async () => {
  const res = await baseAxios.get("/api/login/kakao");
  return res.data;
};

export const financesDetail = async (data: I.Finances) => {
  const res = await baseAxios.post("/api/v1/finances", data);
  return res.data;
};

export const financesCompare = async (data: I.Compare) => {
  const res = await baseAxios.post("/api/v1/compare", data);
  return res.data;
};

/// 라운지 글 작성 - communitypage  /api/v1/lounge
export const postLounge = async (data: I.LoungePost) => {
  const res = await baseAxios.post("/api/v1/lounge", data);
  return res.data;
};

/// 라운지 글 상세 조회(loungepage 글 리스트/comminitypage 글 폼)  /api/v1/lounge/{postId}
export const getLounge = async ({ queryKey }: { queryKey: [string, string] }) => {
  const [, postId] = queryKey;
  const res = await baseAxios.get(`/api/v1/lounge/${postId}`);
  return res.data;
};

/// 라운지 글 내부 투표하기 - communitypage
export const voteLounge = async (data: I.Vote) => {
  const res = await baseAxios.post("/api/v1/vote", data);
  return res.data;
};

/// /// lounge/1 처럼 뒤에 1붙은거는 /${post.id} 이런식으로 params로 처리해야하는건가..? ///

/// 게시판 글 전체 조회 - loungepage/// /api/v1/lounge/all
export const getAllLounge = async (data: I.BoardGetAll) => {
  const res = await baseAxios.get("/api/v1/lounge/all?page=0&size=1&sort=string", data);
  return res.data;
};

/// 라운지 카테고리 조회 /// /api/v1/lounge?finProductType={finProductType}
export const categoryLounge = async (data: I.LoungeCategory) => {
  const res = await baseAxios.get("/api/v1/lounge?finProductType=DEPOSIT&page=0&size=1&sort=string", data);
  return res.data;
};

/// 라운지 글 검색 ///  /api/v1/lounge/search
export const searchLounge = async (data: I.LoungSearch) => {
  const res = await baseAxios.get("/api/v1/lounge/search?keyword=1&page=0&size=1&sort=string", data);
  return res.data;
};

/// api 중 라운지 글 업데이트(put), 라운지 글 삭제(delete)는 있으나 디자인 구현 없음 ///
