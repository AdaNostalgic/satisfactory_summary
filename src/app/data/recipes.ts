export type Ingredients = { [name: string]: number };

export interface Recipe {
  name: string;
  building: string;
  outProductNb: number;
  ingredients: Ingredients;
}

export const recipes: Recipe[] = [
  {
    name: 'ironOre',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'ironLingot',
    building: 'smelter',
    outProductNb: 30,
    ingredients: { ironOre: 30 },
  },
  {
    name: 'ironPlate',
    building: 'constructor',
    outProductNb: 20,
    ingredients: { ironLingot: 30 },
  },
  {
    name: 'ironRod',
    building: 'constructor',
    outProductNb: 20,
    ingredients: { ironLingot: 30 },
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
];
