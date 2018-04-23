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
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
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
