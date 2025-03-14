const url = "https://jsonplaceholder.typicode.com/todos";

// เปลี่ยนจากฟังก์ชันธรรมดาเป็น async function
const fetchTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));// คือการรอให้ 1 วินาที
  // ใช้ await รอให้ fetch เสร็จแล้วค่อยทำงานต่อ
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  return data;
};

type Data = {
  id: string;
  completed: string;
  title: string;
  userId: string;
};

const AboutPage = async () => {
  const data:Data[] = await fetchTodos();
  console.log(data);

  return <div>
    About Page
    {
      data.map((item,index)=>{
        return <li key={index}>{item.title}</li>
      })
    }
    </div>;
};
export default AboutPage;
