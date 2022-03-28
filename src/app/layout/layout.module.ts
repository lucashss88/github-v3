import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [MenuComponent],
    exports: [
        MenuComponent
    ],
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatMenuModule
    ]
})
export class LayoutModule { }