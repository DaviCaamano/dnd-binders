"use client";

import { Routes } from "@type/routes";
import { SpellBook } from "@components/SpellBook/SpellBook";

export default function Wizard() {
  return <SpellBook route={Routes.wizard} />;
}
