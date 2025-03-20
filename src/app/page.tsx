"use client";

import { Routes } from "@type/routes";
import { SpellBook } from "@components/SpellBook";

export default function Home() {
  return <SpellBook route={Routes.wizard} />;
}
