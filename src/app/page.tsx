import Image from "next/image";
import styles from "./page.module.css";


// 각 파일에는 page.tsx가 존재해야한다. (index.tsx와 비슷한 역할.)
export default function Home() {
  return (
    <div style={{display:"flex", flexDirection:"column", marginTop:"30px"}}>
      <span>
        Hello, This is Next 14 practice application.
      </span>
      <span style={{marginTop:"10px"}}>
        This application use pocketbase.
      </span>
    </div>
  );
}
