import capsuleParser from './capsule';
import coreParser from './core';
import dragonParser from './dragon';
import historyParser from './history';
import landingPadsParser from './landingPads';
import launchesParser from './launches';
import launchPadParser from './launchPad';
import missionParser from './mission';
import payloadParser from './payload';
import rocketParser from './rocket';
import shipParser from './ship';

export const parsers = {
    capsules: capsuleParser,
    cores: coreParser,
    dragons: dragonParser,
    history: historyParser,
    landpads: landingPadsParser,
    launches: launchesParser,
    launchpads: launchPadParser,
    missions: missionParser,
    payloads: payloadParser,
    rockets: rocketParser,
    ships: shipParser,
};
