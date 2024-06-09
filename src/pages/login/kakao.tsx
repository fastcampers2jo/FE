import { useNavigate } from "react-router-dom";
import { Loding } from "components";
import { kakaoLogin } from "utils/api";
import { useQuery } from "@tanstack/react-query";

const Prep = () => {
  const navigation = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  const { isSuccess } = useQuery({
    queryKey: ["kakaoLogin", code as string],
    queryFn: kakaoLogin,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  if (isSuccess) navigation("/");
  return (
    <div>
      <Loding />
    </div>
  );
};

export default Prep;
