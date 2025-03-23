"use server";

import { NextResponse } from "next/server";
import { parseBook } from "@utils/parseBook";
import {extraSpells} from '@constants/spells/extra-spells';


export const GET = async () => {
    return NextResponse.json(
        { spells: await parseBook(extraSpells) },
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        },
    );
};
