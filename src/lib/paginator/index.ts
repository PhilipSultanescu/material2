/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MdCommonModule, OverlayModule} from '../core';
import {MdButtonModule} from '../button/index';
import {MdSelectModule} from '../select/index';
import {MdPaginator} from './paginator';
import {MdPaginatorIntl} from './paginator-intl';
import {MdTooltipModule} from '../tooltip/index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdSelectModule,
    MdTooltipModule,
  ],
  exports: [MdPaginator],
  declarations: [MdPaginator],
  providers: [MdPaginatorIntl],
})
export class MdPaginatorModule {}


export * from './paginator';
