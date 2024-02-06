import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { title, content } = data;

  const response = await fetch(
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til",
    {
      method: "POST",
      body: JSON.stringify({
        id: nanoid(),
        title,
        content,
        author: {
          name: "배성재",
        },
      }),
    }
  );
  const til = await response.json();

  return NextResponse.json(til);
}

export async function GET(request: NextRequest) {
  const url =
    "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";

  const options = { method: "GET" };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("데이터 패칭 실패", error);
    return NextResponse.error();
  }
}
