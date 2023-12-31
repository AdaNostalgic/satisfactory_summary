export interface Building {
  name: string;
  label: string;
  power: number;
}

export const buildings : Building [] = [
  {
    name: 'smelter',
    label: 'Fonderie',
    power: 4,
  },
  {
    name: 'constructor',
    label: 'Constructeur',
    power: 4,
  },
  {
    name: 'assembler',
    label: 'Assembleuse',
    power: 15,
  },
  {
    name: 'manufacturer',
    label: 'Façonneuse',
    power: 55,
  },
  {
    name: 'foundry',
    label: 'Fonderie Avancée',
    power: 16,
  }
];
