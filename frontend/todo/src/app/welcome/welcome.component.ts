import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessage : string
  errorMessage : string
  constructor(private route : ActivatedRoute,
              private welcomeDataService : WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }
  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorldBeanService())
    this.welcomeDataService.executeHelloWorldBeanService()
        .subscribe(data => {
          this.welcomeMessage = data.message
        },
        error => this.handleErrorResponse(error)
        )
  }

  getWelcomeMessageWithParam() {
    console.log(this.welcomeDataService.executeHelloWorldBeanServiceWithPathVar(this.name))
    this.welcomeDataService.executeHelloWorldBeanServiceWithPathVar(this.name)
        .subscribe(
          data => {
          this.welcomeMessage = data.message
        },
        error => this.handleErrorResponse(error)
        )
  }
  handleErrorResponse(error: any) {
    console.log(error)
    console.log(error.error)
    console.log(error.error.message)
    this.errorMessage = error.error.message
  }
}
