import { fetchCamp } from "@/utils/actions"
const Camplist = async() => {
    const camps = await fetchCamp();
    console.log(camps);
  return (
    <div>
      {
        camps.map((item,index)=>{
            return <div key={index}>***{item.title}</div>

        })
      }
        
    </div>
  )
};

export default Camplist
