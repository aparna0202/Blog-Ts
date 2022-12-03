import Header from "./Header";
import { Blog } from "./Create";

type Props = {
  blog: Blog[];
};

const Home = ({ blog }: Props) => {
  return (
    <div className="h-screen flex gap-10 items-center justify-center bg-orange-200">
      {blog.map((item) => (
        <div className="bg-white h-1/2 w-1/4  shadow-custom flex flex-col items-center gap-4 p-4 border rounded-xl">
          <h2 className="text-2xl">{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
