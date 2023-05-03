import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewcontainerComponent } from './components/viewcontainer/viewcontainer.component';
import { PaletteGeneratorComponent } from './pages/palette-generator/palette-generator.component';
import { PalettesComponent } from './pages/palettes/palettes.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewcontainerComponent,
    PaletteGeneratorComponent,
    PalettesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
