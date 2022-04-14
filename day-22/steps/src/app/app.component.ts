import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
     <div>
       <h1>Participants List</h1>
       <hr>
       <div *ngFor="let participant of participants">
           <app-ischool [participant]="participant"></app-ischool>
       </div>
     </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'steps';
  participants = [
    { "title" : "Rajesh Kumar ", "region" : "north" , "favcol" : "#FF9933"  },
    { "title" : "Abdullah Taqi ", "region" : "north", "favcol" : "#FAD500"   },
    { "title" : "Harshal Patil ", "region" : "west", "favcol" : "#B1ACDB"   },
    { "title" : "Harshita Verma ", "region" : "central", "favcol" : "#26F0DC"   },
    { "title" : "Harvendra Singh Rathore ", "region" : "central", "favcol" : "#3818D9"  },
    { "title" : "Ishika joshi ", "region" : "central", "favcol" : "#dca2ed"  },
    { "title" : "Khai Sing Wu", "region" : "east", "favcol" : "#6295E0"  },
    { "title" : "Mani Varshney ", "region" : "north", "favcol" : "#00FF00"  },
    { "title" : "Renu Verma ", "region" : "north", "favcol" : "#000000"  },
    { "title" : "Sainath Arjun ", "region" : "south", "favcol" : "#00FF0F"  },
    { "title" : "Suriya Prakash ", "region" : "south", "favcol" : "#5CE618"  },
    { "title" : "Vikrant Kumar ", "region" : "east", "favcol" : "#FF9221"  }
   ]
}
