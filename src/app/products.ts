export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    provider:number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      provider:1
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      provider:2
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: '',
      provider:3
    },
    {
      id: 4,
      name: 'Phone XXL',
      price: 799,
      description: 'A large phone with one of the best screens',
      provider:1
    },
    {
      id: 5,
      name: 'Phone SM',
      price: 699,
      description: 'A great phone with one of the best cameras',
      provider:2
    },
    {
      id: 6,
      name: 'Phone',
      price: 299,
      description: '',
      provider:3
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */