import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const resumePath = path.join(process.cwd(), "public", "resume.pdf");

export async function GET() {
  const pdf = await readFile(resumePath);

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Devashish-Kumar-Resume.pdf"',
      "Content-Length": String(pdf.byteLength),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
