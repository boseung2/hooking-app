import { userState } from "@/recoil/userState";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { useMeQuery } from "@/generated/graphql";
import { useEffect } from "react";

export function useUser() {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  const { data, refetch } = useMeQuery({ skip: !accessToken });

  const isLoggedIn = !!user;

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    refetch();
    setUser(data?.me);
  }, [accessToken, refetch, data?.me, setUser]);

  const loadUserByAccessToken = (accessToken: string) => {
    localStorage.setItem("access_token", accessToken);
    refetch();
    setUser(data?.me);
    router.refresh();
  };

  return { loadUserByAccessToken, isLoggedIn };
}
