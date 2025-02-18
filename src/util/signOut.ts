import { useUserStore } from "@/store/useStore";
import { deleteCookie } from "cookies-next";

export const useSignOut = () => {
  const logOut = useUserStore.getState().signOut;
  deleteCookie("token");
  logOut();
  window.location.reload(); // Recarrega a página ao deslogar
};
