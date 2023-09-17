export type Ingredients = { [name: string]: number };

export interface Recipe {
  name: string;
  building: string;
  outProductNb: number;
  ingredients: Ingredients;
}

export const recipes: Recipe[] = [
  {
    name: 'copperOre',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'copperIngot',
    building: 'smelter',
    outProductNb: 30,
    ingredients: { copperOre: 30 },
  },
  {
    name: 'copperSheet',
    building: 'constructor',
    outProductNb: 10,
    ingredients: { copperIngot: 20 },
  },
  {
    name: 'wire',
    building: 'constructor',
    outProductNb: 30,
    ingredients: { copperIngot: 15 },
  },
  {
    name: 'cable',
    building: 'constructor',
    outProductNb: 60,
    ingredients: { wire: 30 },
  },
  {
    name: 'ironOre',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'ironIngot',
    building: 'smelter',
    outProductNb: 30,
    ingredients: { ironOre: 30 },
  },
  {
    name: 'ironPlate',
    building: 'constructor',
    outProductNb: 20,
    ingredients: { ironIngot: 30 },
  },
  {
    name: 'ironRod',
    building: 'constructor',
    outProductNb: 20,
    ingredients: { ironIngot: 30 },
  },
  {
    name: 'screw',
    building: 'constructor',
    outProductNb: 40,
    ingredients: { ironRod: 10 },
  },
  {
    name: 'reinforcedIronPlate',
    building: 'assembler',
    outProductNb: 5,
    ingredients: {
      ironPlate: 30,
      screw: 60,
    },
  },
  {
    name: 'rotor',
    building: 'assembler',
    outProductNb: 4,
    ingredients: {
      ironRod: 20,
      screw: 100,
    },
  },
];
