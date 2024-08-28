import apiClient from "@/apis/apiClient";
import { Button } from "../ui/button";

export const Home = () => {
  return (
    <div>
      <h2>ツイート一覧画面</h2>
      <Button onClick={() => apiClient.get("/tweets")}>test</Button>
    </div>
  );
};
