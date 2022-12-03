import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";

export type Blog = {
  title: string;
  content: string;
};

type Props = {
  setBlog: Dispatch<SetStateAction<Blog[]>>;
  blog: Blog[];
  data: Blog[];
  setData: Dispatch<SetStateAction<Blog[]>>;

};

const Create = ({ setBlog, blog, data, setData }: Props) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const saveBlog = () => {
    setData([...data, { title, content }]);
  };

  const publishBlog = () => {
    setBlog([...blog, { title, content }]);
  };

  const resetModal = () => {
    setTitle("");
    setContent("");
  };
  return (
    <div className="bg-slate-400 h-[600px] w-[700px] mt-20 flex flex-col items-center justify-center gap-5 fixed top-28 left-1/3 border rounded-xl ">
      <div className="flex flex-col gap-2  w-[450px]">
        <label htmlFor="title" className="text-2xl">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="h-10 p-2"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="flex flex-col gap-2 text-2xl">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          cols={38}
          rows={8}
          className="text-lg p-2"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-white h-8 w-36 border rounded-md"
          onClick={saveBlog}
        >
          Save
        </button>
        <Link to="/">
          <button
            className="bg-white h-8 w-36 border rounded-md"
            onClick={publishBlog}
          >
            Publish
          </button>
        </Link>
        <button
          className="bg-white h-8 w-36 border rounded-md"
          onClick={resetModal}
        >
          Cancel
        </button>
      </div>
      <Link to="/">
        <button className="bg-white w-7 border rounded-md ">X</button>
      </Link>
    </div>
  );
};

export default Create;
