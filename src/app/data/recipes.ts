export interface Recipe {
  name: string;
  building: string;
  outProductNb: number;
  inProducts: {
    name: string;
    nb: number;
  }[];
}

export const recipes = [
  {
    name: 'ironOre',
    building: 'miner',
    outProductNb: 60,
  },
  {
    name: 'ironLingot',
    building: 'smelter',
    outProductNb: 30,
    inProducts: [{ name: 'ironOre', nb: 30 }],
  },
  {
    name: 'ironPlate',
    building: 'constructor',
    outProductNb: 20,
    inProducts: [{ name: 'ironLingot', nb: 30 }],
  },
  {
    name: 'ironRod',
    building: 'constructor',
    outProductNb: 20,
    inProducts: [{ name: 'ironLingot', nb: 30 }],
  },
  {
    name: 'screw',
    building: 'constructor',
    outProductNb: 40,
    inProducts: [{ name: 'ironRod', nb: 10 }],
  },
  {
    name: 'reinforcedIronPlate',
    building: 'assembler',
    outProductNb: 5,
    inProducts: [
      { name: 'ironPlate', nb: 30 },
      { name: 'screw', nb: 60 },
    ],
  },
];
