import { Image } from "lucide-react";
import { Button } from "../ui/button";

export const TweetFormFooter = () => {
  return (
    <div className="flex justify-between">
      <Button variant="circle" size="icon" className=" text-blue-300">
        <Image className="h-4 w-4" />
      </Button>
      <Button className="bg-sky-500 text-white font-bold rounded-full h-9">
        ツイートする
      </Button>
    </div>
  );
};
