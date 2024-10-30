import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { techStack } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="techstack">
      <h1 className="heading">
        My <span className="text-purple">tech stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  
          items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={techStack}
            speed="slow"
            direction="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
