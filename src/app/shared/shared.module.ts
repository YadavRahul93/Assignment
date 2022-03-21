import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from '../shared/components/tile/tile.component';
import { ButtonTileComponent } from '../shared/components/button-tile/button-tile.component';



@NgModule({
  declarations: [
    TileComponent,
    ButtonTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TileComponent,
    ButtonTileComponent
  ]
})
export class SharedModule { }
