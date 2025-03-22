"use client";

import {FeatureList} from '@components/FeatureList/FeatureList';
import {Players} from '@type/players';

export default function Home() {
  return <FeatureList player={Players.Barabis} />;
}
