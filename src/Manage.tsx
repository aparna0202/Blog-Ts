import { Blog } from "./Editor";
import Editor from "./Editor";
import { useState } from "react";

type Props = {
  setBlog: React.Dispatch<React.SetStateAction<Blog[]>>;
  blog: Blog[];
  data: Blog[];
  setData: React.Dispatch<React.SetStateAction<Blog[]>>;
};

const Manage = ({ setBlog, blog, data, setData }: Props) => {
  const [blogOpen, setBlogOpen] = useState<boolean>(false);
  const [currentBlog, setCurrentBlog] = useState<Blog>();

  const deleteBlog = (index: number) => {
    setData(data.filter((item, idx) => index !== idx));
  };
  const openBlog = (item: Blog) => {
    setBlogOpen(true);
    setCurrentBlog(item);
  };
  const deletePublishedBlog = (index: number) => {
    setBlog(blog.filter((item, idx) => index !== idx));
  };

  return (
    <div className="h-screen bg-slate-600 flex items-center justify-center ">
      <div className="h-auto bg-white w-1/4 border rounded-md">
        <h1> Drafts</h1>
        <div className="bg-red-300 text-2xl">
          {data.map((item, index) =>
            !blogOpen ? (
              <div className="flex justify-between">
                <div>{item.title}</div>
                <div className="flex items-center text-[18px]">
                  <button
                    className="bg-white mr-3 w-16 h-8 border rounded-md"
                    onClick={() => openBlog(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-white mr-3 w-16 h-8 border rounded-md "
                    onClick={() => deleteBlog(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <Editor
                setBlog={setBlog}
                blog={blog}
                setData={setData}
                data={data}
                currentBlog={currentBlog}
              />
            )
          )}
        </div>
        <h1>Published Blogs</h1>

        <div className="bg-red-300 text-2xl">
        {blog.map((item, index) =>
            !blogOpen ? (
              <div className="flex justify-between">
                <div>{item.title}</div>
                <div className="flex items-center text-[18px]">
                  <button
                    className="bg-white mr-3 w-16 h-8 border rounded-md"
                    onClick={() => openBlog(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-white mr-3 w-16 h-8 border rounded-md "
                    onClick={() => deletePublishedBlog(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <Editor
                setBlog={setBlog}
                blog={blog}
                setData={setData}
                data={data}
                currentBlog={currentBlog}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Manage;
