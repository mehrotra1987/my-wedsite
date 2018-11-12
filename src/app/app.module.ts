import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutCoupleComponent } from './about-couple/about-couple.component';
import { WeddingCountDownComponent } from './wedding-count-down/wedding-count-down.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { CelebrationHeaderComponent } from './celebration-header/celebration-header.component';
import { WeddingEventsComponent } from './wedding-events/wedding-events.component';
import { OurFamilyComponent } from './our-family/our-family.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { WeddingVenueComponent } from './wedding-venue/wedding-venue.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutCoupleComponent,
    WeddingCountDownComponent,
    OurStoryComponent,
    CelebrationHeaderComponent,
    WeddingEventsComponent,
    OurFamilyComponent,
    GalleryComponent,
    RsvpComponent,
    WeddingVenueComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
