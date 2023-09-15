export interface Product {
  name: string;
  power : number;
  outProductNb: number;
  inProduct: {
    name : string,
    nb: number
  } [];
}

export interface

export const products = [
  { 
    name: 'ironOre',
    power : 5,
    outProductNb : 60
  },
  { 
    name: 'ironLingot',
    power : 4,
    outProductNb : 30,
    inProduct : [{name : 'ironOre', nb : 30}]
  },
  {
    name: 'ironPlate',
    power : 4,
    outProductNb : 20,
    inProduct : [{name : 'ironLingot', nb : 30}]
  },
  {
    name: 'ironRod',
    power : 4,
    outProductNb : 20,
    inProduct : [{name : 'ironLingot', nb : 30}]
  },
];
