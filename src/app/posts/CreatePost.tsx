'use client' // 클라이언트 렌더링을 이용하겠다는 선언

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`http://127.0.0.1:8090/api/collections/posts/records`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title
      })
    })
    setTitle("");
    router.refresh();
  }
  return(
    <form style={{display:"flex", flexDirection:"column", alignItems:"center"}} onSubmit={handleSubmit}>
      <input
        style={{ background:"#929292", color: "white", width: "300px", height: "50px", fontSize: "25px", borderRadius: "15px", borderColor:"#929292" }}
        type="text"
        placeholder="Title"
        value={title}
        onChange = {(e) => setTitle(e.target.value)}
      />
      <button style ={{width: "300px", height:"50px", margin:"10px", opacity:.8, borderRadius:"15px"}}type="submit">submit</button>
    </form>
  )
}

export default CreatePost