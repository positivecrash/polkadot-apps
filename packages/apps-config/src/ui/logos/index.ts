// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

// anything for a specific chain, most would probably fit into the node category (but allow for chain-specific)
import chainKusama from './chains/kusama-128.gif';
import chainDaoIpci from './chains/dao-ipci-114.png';

// defaults for the node type, assuming we don't have a specific chain, but rather match on the implementation
import nodeCentrifuge from './nodes/centrifuge.png';
import nodeEdgeware from './nodes/edgeware-circle.svg';
import nodeNodle from './nodes/nodle.svg';
import nodePolkadot from './nodes/polkadot-circle.svg';
import nodePolkadotJs from './nodes/polkadot-js.svg';
import nodeRobonomics from './nodes/robonomics.svg';
import nodeSubstrate from './nodes/substrate-hexagon.svg';

// extensions
import extensionPolkadotJs from './extensions/polkadot-js.svg';

// last-resort fallback, just something empty
import emptyLogo from './empty.svg';

// overrides based on the actual matched chain name
const chainLogos: Record<string, any> = [
  ['DAO IPCI', chainDaoIpci],
  ['Kusama', chainKusama], // new name after CC3
  ['Kusama CC1', chainKusama],
  ['Kusama CC2', chainKusama],
  ['Kusama CC3', chainKusama]
].reduce((logos, [chain, logo]): Record<string, any> => ({
  ...logos,
  [chain.toLowerCase()]: logo
}), {});

// overrides based on the actual software node type (all '-' converted to ' ')
const nodeLogos: Record<string, any> = [
  ['airalab-robonomics', nodeRobonomics],
  ['centrifuge chain', nodeCentrifuge],
  ['Edgeware Node', nodeEdgeware],
  ['kulupu', nodeSubstrate],
  ['node-template', nodeSubstrate],
  ['Nodle Chain Node', nodeNodle],
  ['parity-polkadot', nodePolkadot],
  ['polkadot-js', nodePolkadotJs],
  ['substrate-node', nodeSubstrate]
].reduce((logos, [node, logo]): Record<string, any> => ({
  ...logos,
  [node.toLowerCase().replace(/-/g, ' ')]: logo
}), {});

// overrides when we pass an explicit logo name
const namedLogos: Record<string, any> = {
  alexander: nodePolkadot,
  centrifuge: nodeCentrifuge,
  edgeware: nodeEdgeware,
  empty: emptyLogo,
  ipci: chainDaoIpci,
  kusama: chainKusama,
  nodle: nodeNodle,
  polkadot: nodePolkadot,
  robonomics: nodeRobonomics,
  substrate: nodeSubstrate,
  westend: nodePolkadot
};

// extension logos
const extensionLogos: Record<string, any> = {
  'polkadot-js': extensionPolkadotJs
};

export {
  chainLogos,
  emptyLogo,
  extensionLogos,
  namedLogos,
  nodeLogos
};
