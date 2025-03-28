"use client";

import { Routes } from "@type/routes";
import { SpellBook } from "@components/SpellBook/SpellBook";

export default function Extra() {
  return <SpellBook route={Routes.reprint} />;
}
