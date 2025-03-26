"use server";

import { NextResponse } from "next/server";
import { getPlayerPages } from "@constants/pages/getPlayerPages";
import { Player } from "@type/player";

export const GET = async () => {
  return NextResponse.json(
    { features: getPlayerPages(Player.global) },
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};
