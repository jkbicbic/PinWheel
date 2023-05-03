import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaletteGeneratorComponent } from './components/palette-generator/palette-generator.component';
import { PalettesComponent } from './components/palettes/palettes.component';

const routes: Routes = [
  {
    path: '',
    component: PaletteGeneratorComponent,
  },
  {
    path: 'palettes',
    component: PalettesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
