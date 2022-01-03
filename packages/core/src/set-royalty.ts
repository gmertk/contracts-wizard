import type { ContractBuilder, ParentContract } from './contract';

export const royaltyFractionPattern = /^\d+$/;

export function setRoyalty(c: ContractBuilder, parent: ParentContract, recipient: string, fraction: string) {
  if(!royaltyFractionPattern.test(fraction)) {
    return;
  }

  c.addParent(parent);
  c.addConstructorCode(`_setDefaultRoyalty(address(${recipient}), ${fraction});`);
}