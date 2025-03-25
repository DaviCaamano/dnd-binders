"use client";

import {FeatureList} from '@components/FeatureList/FeatureList';
import {Player} from '@type/player';

export default function Home() {
    return <FeatureList player={Player.demis} />;
}
