export type Ingredients = { [name: string]: number };

export interface Recipe {
  name: string;
  label ?: string;
  building: string;
  outProductNb: number;
  ingredients: Ingredients;
}

export const recipes: Recipe[] = [
  {
    name: 'copperOre',
    label: 'Minerai de Cuivre',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'copperIngot',
    label: 'Lingot de Cuivre',
    building: 'smelter',
    outProductNb: 30,
    ingredients: { copperOre: 30 },
  },
  {
    name: 'copperSheet',
    label: 'Tôle de Cuivre',
    building: 'constructor',
    outProductNb: 10,
    ingredients: { copperIngot: 20 },
  },
  {
    name: 'wire',
    label: 'Fil électrique',
    building: 'constructor',
    outProductNb: 30,
    ingredients: { copperIngot: 15 },
  },
  {
    name: 'cable',
    label: 'Câble',
    building: 'constructor',
    outProductNb: 60,
    ingredients: { wire: 30 },
  },
  {
    name: 'ironOre',
    label : 'Minerai de Fer',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'ironIngot',
    label : 'Lingot de Fer',
    building: 'smelter',
    outProductNb: 30,
    ingredients: { ironOre: 30 },
  },
  {
    name: 'ironPlate',
    label : 'Plaque de Fer',
    building: 'constructor',
    outProductNb: 20,
    ingredients: { ironIngot: 30 },
  },
  {
    name: 'ironRod',
    label : 'Tige de Fer',
    building: 'constructor',
    outProductNb: 20,
    ingredients: { ironIngot: 30 },
  },
  {
    name: 'screw',
    label : 'Vis',
    building: 'constructor',
    outProductNb: 40,
    ingredients: { ironRod: 10 },
  },
  {
    name: 'reinforcedIronPlate',
    label : 'Plaque de Fer Renforcée',
    building: 'assembler',
    outProductNb: 5,
    ingredients: {
      ironPlate: 30,
      screw: 60,
    },
  },
  {
    name: 'modularFrame',
    label: 'Cadre Modulaire',
    building: 'assembler',
    outProductNb: 2,
    ingredients: {
      reinforcedIronPlate: 3,
      ironRod: 12,
    },
  },
  {
    name: 'smartPlating',
    label: 'Placage Intelligent',
    building: 'assembler',
    outProductNb: 2,
    ingredients: {
      reinforcedIronPlate: 2,
      rotor: 2,
    },
  },
  {
    name: 'rotor',
    label : 'Rotor',
    building: 'assembler',
    outProductNb: 4,
    ingredients: {
      ironRod: 20,
      screw: 100,
    },
  },
  {
    name: 'limestone',
    label: 'Calcaire',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'concrete',
    label: 'Béton',
    building: 'constructor',
    outProductNb: 15,
    ingredients: {limestone: 45},
  },
  {
    name: 'rawQuartz',
    label: 'Quartz Brut',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'quartzCrystal',
    label: 'Cristal de Quartz',
    building: 'constructor',
    outProductNb: 22.5,
    ingredients: {rawQuartz: 37.5},
  },
  {
    name: 'crystalOscillator',
    label: 'Oscillateur à Cristal',
    building: 'manufacturer',
    outProductNb: 1,
    ingredients: {
      quartzCrystal: 18, 
      reinforcedIronPlate: 2.5,
      cable: 14,
    },
  },
  {
    name: 'silica',
    label: 'Silice',
    building: 'constructor',
    outProductNb: 37.5,
    ingredients: {rawQuartz: 22.5},
  },
  {
    name: 'coal',
    label: 'Charbon',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'steelIngot',
    label: 'Lingot d\'Acier',
    building: 'foundry',
    outProductNb: 45,
    ingredients: {
      coal: 45, 
      ironOre:45,
    },
  },
  {
    name: 'steelBeam',
    label: 'Poutre en Acier',
    building: 'constructor',
    outProductNb: 15,
    ingredients: {
      steelIngot: 60
    },
  },
  {
    name: 'steelPipe',
    label: 'Tuyau en Acier',
    building: 'constructor',
    outProductNb: 20,
    ingredients: {
      steelIngot: 30
    },
  },
  {
    name: 'versatileFramework',
    label: 'Structure Polyvalente',
    building: 'assembler',
    outProductNb: 5,
    ingredients: {
      steelBeam: 30,
      modularFrame: 2.5,
    },
  },
  {
    name: 'encasedIndustrialBeam',
    label: 'Poutre en Béton Armée',
    building: 'assembler',
    outProductNb: 6,
    ingredients: {
      steelBeam: 24,
      concrete: 30,
    },
  },
  {
    name: 'stator',
    label: 'Stator',
    building: 'assembler',
    outProductNb: 5,
    ingredients: {
      steelPipe: 15,
      wire: 40,
    },
  },
  {
    name: 'motor',
    label: 'Moteur',
    building: 'assembler',
    outProductNb: 5,
    ingredients: {
      stator: 10,
      rotor: 10,
    },
  },
  {
    name: 'automatedWiring',
    label: 'Câblage Automatisé',
    building: 'assembler',
    outProductNb: 2.5,
    ingredients: {
      stator: 2.5,
      cable: 50,
    },
  },
  {
    name: 'automatedWiring',
    label: 'Câblage Automatisé',
    building: 'assembler',
    outProductNb: 2.5,
    ingredients: {
      stator: 2.5,
      cable: 50,
    },
  },
  {
    name: 'heavyModularFrame',
    label: 'Cadre Modulaire Lourd',
    building: 'manufacturer',
    outProductNb: 2,
    ingredients: {
      modularFrame: 10,
      steelPipe : 30,
      encasedIndustrialBeam: 10,
      screw: 200,
    },
  },
  {
    name: 'circuitBoard',
    label: 'Circuit Imprimé',
    building: 'assembler',
    outProductNb: 7.5,
    ingredients: {
      plastic: 30,
      copperSheet : 15,      
    },
  },
  {
    name: 'computer',
    label: 'Ordinateur',
    building: 'manufacturer',
    outProductNb: 2.5,
    ingredients: {
      circuitBoard: 25,
      cable: 22.5,
      plastic : 45,
      screw: 130,
    },
  },
  {
    name: 'modularEngine',
    label: 'Moteur Modulaire',
    building: 'manufacturer',
    outProductNb: 1,
    ingredients: {
      motor: 2,
      rubber: 15,
      smartPlating: 2,
    },
  },
  {
    name: 'adaptiveControlUnit',
    label: 'Unité de Contrôle Adaptive',
    building: 'manufacturer',
    outProductNb: 1,
    ingredients: {
      automatedWiring: 7.5,
      circuitBoard: 5,
      heavyModularFrame: 1,
      computer: 1,
    },
  },
  {
    name: 'cateriumOre',
    label: 'Minerai de Caterium',
    building: 'miner',
    outProductNb: 60,
    ingredients: {},
  },
  {
    name: 'cateriumIngot',
    label: 'Lingot de Caterium',
    building: 'smelter',
    outProductNb: 15,
    ingredients: {
      cateriumOre: 45      
    },
  },
  {
    name: 'quickwire',
    label: 'Filactif',
    building: 'constructor',
    outProductNb: 60,
    ingredients: {
      cateriumIngot: 12      
    },
  },
  {
    name: 'aiLimiter',
    label: 'Contrôleur d\'I.A.',
    building: 'assembler',
    outProductNb: 5,
    ingredients: {
      quickwire: 100,
      copperSheet: 25
    },
  },
  {
    name: 'highSpeedConnector',
    label: 'Connecteur Haute Vitesse',
    building: 'manufacturer',
    outProductNb: 3.75,
    ingredients: {
      quickwire: 210,
      cable: 37.5,
      circuitBoard: 3.75
    },
  },
  {
    name: 'superComputer',
    label: 'Super Calculateur',
    building: 'manufacturer',
    outProductNb: 1.875,
    ingredients: {
      computer: 3.75,
      aiLimiter: 37.5,
      highSpeedConnector: 5.625,
      plastic: 52.5,
    },
  },
];
