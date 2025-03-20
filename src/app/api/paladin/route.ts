"use server";

import path from "path";
import { NextResponse } from "next/server";
import { parseBook } from "@utils/parseBook";

const paladinFilePaths = [
  path.join(
    process.cwd(),
    "src",
    "constants",
    "spells",
    "paladin",
    "paladin1.txt",
  ),
];

export const GET = async () => {
  return NextResponse.json(
    { spells: await parseBook(paladinFilePaths) },
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};
