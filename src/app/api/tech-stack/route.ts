import { TechStackService } from "@/services/tech_stack.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await TechStackService.getAll();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch tech stack" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = await TechStackService.create(body);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to create tech stack" },
      { status: 500 }
    );
  }
}
