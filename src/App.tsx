import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import Manage from "./Manage";
import { Blog } from "./Create";
import Header from "./Header";

function App() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [data, setData] = useState<Blog[]>([]);


  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home blog={blog} />} />
        <Route
          path="/create"
          element={<Create setBlog={setBlog} blog={blog} setData={setData} data={data} />}
        />
        <Route path="/manage" element={<Manage blog={blog} data={data}/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
