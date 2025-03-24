"use server";

import path from "path";
import { NextResponse } from "next/server";
import { parseBook } from "@utils/parseBook";

const warlockFilePaths = [
  path.join(   process.cwd(),
    "src",
    "constants",
    "spells",
    "warlock",
    "warlock1.txt",
  ),
  path.join(
    process.cwd(),
    "src",
    "constants",
    "spells",
    "warlock",
    "warlock2.txt",
  ),
  path.join(
    process.cwd(),
    "src",
    "constants",
    "spells",
    "warlock",
    "warlock3.txt",
  ),
];

export const GET = async () => {
  return NextResponse.json(
    { spells: await parseBook(warlockFilePaths) },
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};
