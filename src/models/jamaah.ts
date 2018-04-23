export class Jamaah {

    constructor(fields: any) {
      // Quick and dirty extend/assign fields to this model
      for (const f in fields) {
        // @ts-ignore
        this[f] = fields[f];
      }
    }
  
  }
  
  export interface Jamaah {
    [prop: string]: any;
  }
  