import Editor from "./Editor";
import {Blog} from "./Editor"

type Props = {setBlog: Dispatch<SetStateAction<Blog[]>>;
  blog: Blog[];
  data: Blog[];
  setData: Dispatch<SetStateAction<Blog[]>>;
};
const Create = ({ setBlog, blog, data, setData }:Props) => {
  return <Editor setBlog={setBlog} blog={blog} setData={setData} data={data}/>;
};

export default Create;
