import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";
import { LoginServiceService } from '../services/login-service.service';
import {CookieService} from 'angular2-cookie/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {  UploadserviceService } from '../services/uploadservice.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  fulldata : object = <object>{} ;
  usercode : string;
  state : string = "minimized";
  dropdownstate : string = "collapsed";
  username: string;
  profileurl: string;
  constructor(private location: Location,private  uploadService: UploadserviceService, private storage:LocalStorageService, private route: ActivatedRoute, private login : LoginServiceService, private router: Router, private logincookie : CookieService) { }

  gotoleave(){
    this.router.navigate(['hr/viewleave',{details : this.usercode}]);
  }

  movedown(){
      if (this.dropdownstate == "collapsed"){
        $('.dropdown-menu').first().stop(true, true).slideDown();
        this.dropdownstate = "down";
      }else{
        $('.dropdown-menu').first().stop(true, true).slideUp();
        this.dropdownstate = "collapsed";
      }

  }

  moveup(){
    if (this.dropdownstate == "collapsed"){
      $('.dropdown-menu').first().stop(true, true).slideDown();
      this.dropdownstate = "down";
    }else{
      $('.dropdown-menu').first().stop(true, true).slideUp();
      this.dropdownstate = "collapsed";
    }
  }
  togglenav(){
    if (this.state == "expanded") {
        $('.sidebar').css('margin-left', '-190px');
        $('#main-wrapper').css('margin-left', '60px');
        $('.menu-icon').css('float','none');
        $('.menu-icon').css('position','absolute');
        $('.large-icon').css('padding-left','15px');
        $('.small-icon').css('padding-left','18px');
        $('.menu-icon').css('right','0');
        this.state = "minimized";
    } else {
        if (this.state == "minimized") {
            $('.sidebar').css('margin-left', '0px');
            //$('#main-wrapper').css('margin-left', '250px');
            $('.menu-icon').css('float','left');
            $('.menu-icon').css('position','relative');
            $('.large-icon').css('padding-left','0px');
            $('.small-icon').css('padding-left','0px');
            this.state = "expanded";
        }
    }
  }

  ngOnInit() {
    this.location.subscribe((ev:PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((ev:any) => {
            if (ev instanceof NavigationStart) {
                if (ev.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (ev instanceof NavigationEnd) {
                if (ev.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
    this.username = this.storage.retrieve("uname");
    if (!this.storage.retrieve("uname")){
      this.router.navigate(['']);
    }
    if (this.login.getloginstatus(this.storage.retrieve("uname")) == false){
      this.router.navigate(['']);
    }else{
      this.uploadService.getUrl(this.storage.retrieve("uname")).subscribe(data => {
        this.profileurl = data;
      });
      this.route.firstChild.params.subscribe(params => {
           this.usercode = params['details'];
         this.login.loginemployee(atob(params['details'])).subscribe(data => {
           this.fulldata = data;

           if (this.fulldata == null){
             this.router.navigate(['']);
           }
         });
      });
    }

  }

  logout(){
    this.storage.clear();
    this.login.logoutuser(this.fulldata['username']);
    this.router.navigate(['']);
  }
  changedata(){
    this.router.navigate(['hr/updatedetails', {details : this.usercode}]);
  }

  gotohome(){
    this.router.navigate(['hr/home', {details : this.usercode}]);
  }


}
