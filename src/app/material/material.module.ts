import { NgModule } from '@angular/core';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  exports: [
    MatTooltipModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,

  ]
})
export class MaterialModule { }
