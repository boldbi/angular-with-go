import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {

    //Go application would be run on https://localhost:5001;http://localhost:5000, which needs to be set as `apiHost`
    public apiHost="http://localhost:8086";
  
    //Url of the Authorization action in Go application
    public authorizationUrl= "/authorizationserver";
    
  //Url of the GetDetails action in Go application
    public getEmbedConfigUrl= "/getdetails";

    public embedConfig: any;
      
    public dashboards: any;
  
    public baseUrl: any;
  
    public dashboardServerApiUrl!: string;
    
    constructor(private _app: appService) {
    }

  ngOnInit() {

  }
}

