'use server';

import path from 'path';
import { NextResponse } from 'next/server';

import { parseBook } from 'components/utils/parseBook';

const wizardFilePaths = [
  path.join(process.cwd(), 'src', 'app', 'spells', 'wizard', 'wizard1.txt'),
  path.join(process.cwd(), 'src', 'app', 'spells', 'wizard', 'wizard2.txt'),
  path.join(process.cwd(), 'src', 'app', 'spells', 'wizard', 'wizard3.txt'),
  path.join(process.cwd(), 'src', 'app', 'spells', 'wizard', 'wizard4.txt'),
  path.join(process.cwd(), 'src', 'app', 'spells', 'wizard', 'wizard5.txt'),
  path.join(process.cwd(), 'src', 'app', 'spells', 'wizard', 'wizard6.txt'),
  path.join(process.cwd(), 'src', 'app', 'spells', 'wizard', 'wizard7.txt'),
];

export const GET = async () => {
  return NextResponse.json(
    { spells: await parseBook(wizardFilePaths) },
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  );
};
