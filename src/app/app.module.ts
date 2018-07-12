import { AuthInterceptor } from './auth.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TransformPipe } from './shared/transform.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { RemoveTeskComponent } from './remove-tesk/remove-tesk.component';
import { FinishedTaskComponent } from './finished-task/finished-task.component';
import { TaskServiceService } from './services/task-service.service';
import { CheckedDirective } from './shared/checked.directive';
import { HoverDirective } from './shared/hover.directive';
import { SortPipe } from './shared/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    RemoveTeskComponent,
    FinishedTaskComponent,
    CheckedDirective,
    HoverDirective,
    TransformPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TaskServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
