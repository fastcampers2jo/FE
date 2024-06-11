import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { isLogin } from "types";
import { keepLogin } from "utils/api";
import { getCookie } from "utils/cookies";

const useAuth = () => {
  const token = getCookie("token");
  const [hasToken, setHasToken] = useState(false);
  const { data: login } = useQuery<isLogin>({
    queryKey: ["login"],
    queryFn: keepLogin,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: hasToken,
  });
  useEffect(() => {
    if (token) setHasToken((prev) => !prev);
  }, [token]);
  return { login };
};

export default useAuth;
