import { Link } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type Blog = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  setBlog: React.Dispatch<React.SetStateAction<Blog[]>>;
  blog: Blog[];
  data: Blog[];
  setData: React.Dispatch<React.SetStateAction<Blog[]>>;
  currentBlog?:Blog
};

const Editor = ({ setBlog, blog, data, setData, currentBlog }: Props) => {
  const [content, setContent] = useState((currentBlog)?currentBlog.title:"");
  const [title, setTitle] = useState((currentBlog)?currentBlog.content:"");

  const saveBlog = () => {
    setData([...data, { id: uuidv4(), title, content }]);
  };

  const publishBlog = () => {
    setBlog([...blog, { id: uuidv4(), title, content }]);
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

export default Editor;
