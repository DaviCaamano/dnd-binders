import fs from "fs";
import { Spell, SpellKeys } from "@type/spells";
import { getLevelAndSchool, replaceTableHeaders } from "@utils/fileParser";

export const parseBook = async (filePaths: string[]): Promise<Spell[]> => {
  const book: string[][] = await getBook(filePaths);

  const spells: Spell[] = [];
  for (const spellData of book) {
    if (spellData.length < 2) {
      continue;
    }
    const spell: Partial<Spell> = {};

    spell.name = spellData[0];
    const [level, school] = getLevelAndSchool(spellData[1]);

    spell.level = level;
    spell.school = school;
    // Next few lines are values of the spell data. I call this section the header
    const headerIndex = spellData.findIndex((line) => line === "___");
    const headerEndIndex = spellData.findIndex((line) => line === "---");
    const headerCount = headerEndIndex - headerIndex - 1;
    if (headerCount < 1) {
      continue;
    }
    for (let i = headerIndex + 1; i < headerEndIndex; i++) {
      const [key, value] = spellData[i]
        .replace(/\*/g, "")
        .replace("- ", "")
        .trim()
        .split(": ");

      if (!key || !SpellKeys[key as keyof typeof SpellKeys] || !value) {
        continue;
      }
      (spell[SpellKeys[key as keyof typeof SpellKeys]] as unknown as string) =
        value;
    }

    // Collect the Rest of the Text as the text of the spell.
    let nextLine = headerEndIndex + 1;
    spell.text = [];
    while (
      typeof spellData[nextLine] === "string" &&
      nextLine < spellData.length
    ) {
      spell.text.push(spellData[nextLine]);
      nextLine++;
    }
    spell.text = removeTrailingEmptyStrings(spell.text);

    spells.push(spell as Spell);
  }

  // Group spells by level
  const spellsByLevel: Record<string, Spell[]> = spells.reduce(
    (acc, spell) => {
      const level =
        spell.level?.toLowerCase() === "cantrip" ? "0" : spell.level || "0";
      if (!acc[level]) {
        acc[level] = [];
      }
      acc[level].push(spell);
      return acc;
    },
    {} as Record<string, Spell[]>,
  );

  // Create an array of spell arrays grouped by level
  const spellsGroupedByLevel = Object.keys(spellsByLevel)
    .sort((a, b) => {
      if (a === "0" && b !== "0") return -1;
      if (a !== "0" && b === "0") return 1;
      return parseInt(a, 10) - parseInt(b, 10);
    })
    .map((level) => spellsByLevel[level])
    // sort each subarray by name
    .map((spells) => spells.sort((a, b) => a.name.localeCompare(b.name)));

  return spellsGroupedByLevel.flat();
};

const getBook = async (filePaths: string[]) => {
  const pages: string[] = [];

  for (const filePath of filePaths) {
    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(filePath)
        .on("data", (data) => {
          // Process each file's data here
          pages.push(data.toString());
        })
        .on("end", () => {
          resolve();
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  const book: string[][] = pages
    .map((book) =>
      replaceTableHeaders(book)
        .split("#### ")
        .map((page) => page.split(/\r?\n/)),
    )
    .flat();

  return book;
};

const removeTrailingEmptyStrings = (arr: string[]): string[] => {
  while (arr.length > 0 && arr[arr.length - 1] === "") {
    arr.pop();
  }
  return arr;
};
