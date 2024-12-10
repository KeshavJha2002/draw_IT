import { useContext } from "react";
import { AppContext } from "../provider/AppStatesProvider";

export const useAppContext = () => {
  return useContext(AppContext);
}