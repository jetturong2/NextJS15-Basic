"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createCamp = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) =>setInterval(resolve, 1000));

    // const title = formData.get("title");
    // const location = formData.get("location");
    const rawData = Object.fromEntries(formData);
 console.log(rawData);
 //prisma.camp.create
 //revalidatePath("/camp");
 //redirect("/");
 return "createCamp success !!!!";
}

export const fetchCamp = async () => {
    //prisma.camp.findMany
const camps = [
    {id: 1, title: "โคราช"},
    {id: 2, title: "เชียงใหม่"},
    {id: 3, title: "เชียงราย"},
    {id: 4, title: "เชียงใหม่"},
    {id: 5, title: "สุราษฎร์ธานี"},
    {id: 6, title: "กรุงเทพ"},
    {id: 7, title: "สมุทรปราการ"},
]
return camps;
}