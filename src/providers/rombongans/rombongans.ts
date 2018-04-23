import { Injectable } from '@angular/core';

import { Jamaah } from '../../models/jamaah';
import { Api } from '../api/api';

@Injectable()
export class Jamaahs {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/jamaahs', params);
  }

  add(jamaah: Jamaah) {
  }

  delete(jamaah: Jamaah) {
  }

}
