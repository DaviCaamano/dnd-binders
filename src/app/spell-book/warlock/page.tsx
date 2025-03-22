"use client";

import { Routes } from "@type/routes";
import { SpellBook } from "@components/SpellBook/SpellBook";

export default function Warlock() {
    return <SpellBook route={Routes.warlock} />;
}
