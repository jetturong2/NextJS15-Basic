import Counter from "@/components/Counter";
import Image from "next/image"; 
const url =
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";
  
const Page = () => {
  console.log("server roitaile");
  return (
    <div>
      Page
      <Counter />
      <hr />
      <Image
        src={url} // ใช้ในการกำหนด URL ของรูปภาพ
        width={400}
        height={400}
        alt="image" // ใช้ในการกำหนดข้อความที่จะแสดงเมื่อรูปไม่สามารถแสดงได้
        priority // ใช้ในการกำหนดว่าจะให้รูปที่เรียกใช้มาก่อนหรือไม่
      />


    </div>
  );
};

export default Page;
