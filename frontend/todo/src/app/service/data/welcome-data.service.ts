import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

export class HelloMessageBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient : HttpClient) { }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloMessageBean>("http://localhost:8080/hello-world-bean/")
  }

  executeHelloWorldBeanServiceWithPathVar(name :string) {
    return this.httpClient.get<HelloMessageBean>(`http://localhost:8080//hello-world-bean/path-variable/${name}`)
  }
}
