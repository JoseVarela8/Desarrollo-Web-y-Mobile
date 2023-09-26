import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChunkPipe } from './chunk.pipe'; // Importa el filtro personalizado


import { AppRoutingModule } from './app-routing.module';
import { MiComponente } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { SearchComponent } from './busqueda/busqueda.component';


@NgModule({
  declarations: [MiComponente, ChunkPipe, HeaderComponent, FooterComponent, ModalComponent, SearchComponent],
  imports: [BrowserModule,AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [MiComponente]
})
export class AppModule { }