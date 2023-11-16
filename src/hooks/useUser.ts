import { userState } from "@/recoil/userState";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { useLogoutMutation, useMeQuery } from "@/generated/graphql";
import { useEffect } from "react";
import { useApolloClient } from "@apollo/client";

export function useUser() {
  const client = useApolloClient();
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  const accessToken =
    typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
  const { data, refetch } = useMeQuery({ skip: !accessToken });
  const [logoutMutation, { loading: logoutLoading }] = useLogoutMutation();

  const isLoggedIn = !!user;

  useEffect(() => {
    if (!accessToken) {
      setUser(null);
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

  const logout = async () => {
    try {
      await logoutMutation();
      localStorage.removeItem("access_token");
      await client.resetStore();
    } catch (e) {
      console.log(e);
    }
  };

  const loading = logoutLoading;

  return { loadUserByAccessToken, isLoggedIn, logout, loading };
}
