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
  currentBlog?: Blog;
  setCurrentBlog: React.Dispatch<React.SetStateAction<Blog>>;
};

const Editor = ({
  setBlog,
  blog,
  data,
  setData,
  currentBlog,
  setCurrentBlog,
}: Props) => {
  const [content, setContent] = useState(
    currentBlog ? currentBlog.content : ""
  );
  const [title, setTitle] = useState(currentBlog ? currentBlog.title : "");
  const [showForm, setShowForm] = useState<boolean>(true);

  const saveBlog = () => {
    if (currentBlog) {
      currentBlog.title = title;
      currentBlog.content = content;
    }
    if (title !== "") {
      setData([...data, { id: uuidv4(), title, content }]);
    }
  };

  const publishBlog = () => {
    if (currentBlog) {
      currentBlog.title = title;
      currentBlog.content = content;
    }
    if (title !== "") {
      setBlog([...blog, { id: uuidv4(), title, content }]);
    }
  };

  const resetModal = () => {
    setTitle("");
    setContent("");
  };
  return (
    <>
      {showForm ? (
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Editor;
