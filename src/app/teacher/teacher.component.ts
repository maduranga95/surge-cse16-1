import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import {CookieService} from 'angular2-cookie/core';
//import {TeacherHomeComponent} from '../teacher/teacher-home/teacher-home.component';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
//  providers:[TeacherHomeComponent]
})
export class TeacherComponent implements OnInit {

  username: string;
  usercode: string;
  fulldata : object = <object>{} ;
  state : string = "expanded";
  dropdownstate : string = "collapsed";
  dropdownstate1: string ="themeup";
//  username: string;
  profileurl: string;
  constructor(private logincookie : CookieService , private route: ActivatedRoute, private login : LoginServiceService,private router:Router){}//,private home:TeacherHomeComponent) { }

  movedown(){
      console.log("dad");
      if (this.dropdownstate == "collapsed"){
        $('.dropdown-menu').first().stop(true, true).slideDown();
        this.dropdownstate = "down";
      }else{
        $('.dropdown-menu').first().stop(true, true).slideUp();
        this.dropdownstate = "collapsed";
      }

  }

  movedownl(){
      console.log("dad1");
      if (this.dropdownstate1 == "themeup"){
        $('.dropdown-menu1').first().stop(true, true).slideDown();
        this.dropdownstate1 = "down";
      }else{
        $('.dropdown-menu1').first().stop(true, true).slideUp();
        this.dropdownstate1 = "themeup";
      }

  }

  dracular(){
    $('#header').css('background-color', '#424242');
    $('#menu').css('background-color', '#424242');
    $('#nbAcctDD').css('background-color', '#424242');
    $('#menu1').css('background-color', '#424242');
    $('#nbAcc').css('background-color', '#424242')
    $('#main-wrapper').css('background-color', '#8c8c8c');
    $('#sidebar-wrapper').css('background-color', '#424242');
    $('.sidebar').css('background-color', '#2b2b2d');
    $('#sidebar-wrapper').css('background-color', '#424242');
  }

  blue(){
    $('#header').css('background-color', '#001a33');
    $('#menu').css('background-color', '#001a33');
    $('#nbAcctDD').css('background-color', '#001a33');
    $('#menu1').css('background-color', '#001a33');
    $('#nbAcc').css('background-color', '#001a33')
    $('#main-wrapper').css('background-color', '#b3d9ff');
    $('#wrapper').css('background-color', '#001a33');
    $('.sidebar').css('background-color', '#001a33');
    $('#sidebar-wrapper').css('background-color', '#001a33');
  }

  togglenav(){
    if (this.state == "expanded") {
        $('.sidebar').css('margin-left', '-190px');
        $('#main-wrapper').css('margin-left', '60px');
        $('.menu-icon').css('float','none');
        $('.menu-icon').css('position','absolute');
        $('.menu-icon').css('right','0');
        this.state = "minimized";
    } else {
        if (this.state == "minimized") {
            $('.sidebar').css('margin-left', '0px');
            $('#main-wrapper').css('margin-left', '250px');
            $('.menu-icon').css('float','left');
            $('.menu-icon').css('position','relative');
            this.state = "expanded";
        }
    }
  }

  ngOnInit() {
    if (!this.logincookie.get("uname")){
      this.router.navigate(['']);
    }

    console.log(this.logincookie.get("uname")+"adsa");
    if (this.login.getloginstatus(this.logincookie.get("uname")) == false){
      this.router.navigate(['']);
    }else{
      this.route.firstChild.params.subscribe(params => {
           console.log(atob(params['details']));
           this.usercode = params['details'];
         this.login.loginteacher(atob(params['details'])).subscribe(data => {
           this.fulldata = data;

           if (this.fulldata == null){
             this.router.navigate(['']);
           }
         });
      });
    }
  }

  logout(){
    this.logincookie.remove("uname");
    this.login.logoutuser(this.fulldata['username']);
    this.router.navigate(['']);
  }

  changedata(){
    this.router.navigate(['../admin/updatedetails', {details : this.usercode}]);
  }

  seeme(){
    console.log(this.fulldata);
  }

  redirecthome(){
    this.router.navigate(['teacher/home',{details: btoa(this.username)}]);
  }

  redirectLeave(){
    this.router.navigate(['teacher/leaveapplication',{details: btoa(this.username)}]);
  }

  redirectModules(){
    this.router.navigate(['teacher/modules',{details: btoa(this.username)}]);
  }


}
