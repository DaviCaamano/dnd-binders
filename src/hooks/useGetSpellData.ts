import { useEffect, useState } from "react";
import { Routes } from "@type/routes";
import { Spell } from "@type/spells";

export const useGetSpellData = (routes: Routes) => {
  const [spellData, setSpellData] = useState<Spell[]>([]);

  useEffect(() => {
    fetch(`/api/${routes}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSpellData(data.spells);
        return;
      })
      .catch((error) => console.error("Error fetching the JSON data:", error));
  }, [routes]);

  return spellData;
};
