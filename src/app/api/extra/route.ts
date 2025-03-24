"use server";

import { NextResponse } from "next/server";
import { parseBook } from "@utils/parseBook";
import path from "path";

const extraSpellsFilePaths = [
    path.join(
        process.cwd(),
        "src",
        "constants",
        "spells",
        "extra-spells.txt",
    ),
];

export const GET = async () => {
    return NextResponse.json(
        { spells: await parseBook(extraSpellsFilePaths) },
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        },
    );
};
