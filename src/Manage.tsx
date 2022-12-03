import {Blog} from "./Create"

type Props = {
    blog: Blog[];
    data: Blog[];
}

const Manage = ({blog, data}: Props) => {
  return (
    <div className='h-screen bg-slate-600 flex items-center justify-center '> 
    <div className="h-auto bg-white w-1/4 border rounded-md">
        <div className="bg-red-300 text-2xl">Drafts
        {data.map((item)=><div onClick={<Blog/>}>{item.title}</div>)}
        </div>
        <div className="bg-red-300 text-2xl">Blogs
        {blog.map((item)=><div>{item.title}</div>)}
        </div>

    </div>
     </div>
  )
}

export default Manage