import { fetchCamp } from "@/utils/actions";
import { NextResponse } from "next/server";
export const GET = async (reg: NextResponse) => {
  const { searchParams } = new URL(reg.url);
  const search = searchParams.get("search");
  console.log(search);


    const camps = await fetchCamp()
    // return Response.json({ camps })
    return NextResponse.redirect(new URL("/camp", reg.url).toString());
  }