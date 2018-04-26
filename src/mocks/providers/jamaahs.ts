import { Injectable } from '@angular/core';

import { Jamaah } from '../../models/jamaah';

@Injectable()
export class Jamaahs {
  jamaahs: Jamaah[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let jamaahs = [
      {
        "name": "Edy Purwanto",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Pasteur"
      },
      {
        "name": "Riki Rahayu",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Cimahi"
      },
      {
        "name": "Tristianto Pradipta",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Bandung"
      },
      {
        "name": "Avantika Julianti",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Cicalengka"
      },
      {
        "name": "Siswo Puspito",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Kiaracondong"
      },
      {
        "name": "Dadan Ramdan",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Bandung"
      },
      {
        "name": "Dila Aulia",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Ciwastra"
      }
    ];

    for (let jamaah of jamaahs) {
      this.jamaahs.push(new Jamaah(jamaah));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.jamaahs;
    }

    return this.jamaahs.filter((jamaah) => {
      for (let key in params) {
        let field = jamaah[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return jamaah;
        } else if (field == params[key]) {
          return jamaah;
        }
      }
      return null;
    });
  }

  add(jamaah: Jamaah) {
    this.jamaahs.push(jamaah);
  }

  delete(jamaah: Jamaah) {
    this.jamaahs.splice(this.jamaahs.indexOf(jamaah), 1);
  }
}
