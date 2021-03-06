import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs/Observable';
import { Batch } from '../models/batch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { StudentservicesService } from '../services/studentservices.service';
declare var firebase: any;

@Injectable()
export class LoadbatchesService {

  constructor(private _http: HttpClient, private sservice : StudentservicesService) { }

  deletefromclasses(student){
    var SubofYear : any[] = [];
    this.sservice.levelModule(student,"Year 1").subscribe(data => {
      SubofYear = data;
      var i = 0 ;
      for (;i<SubofYear.length;i++){
        console.log('classes/'+SubofYear[i].moduleNo+'/students/'+student);
        firebase.database().ref('classes/'+SubofYear[i].moduleNo+'/students/'+student).remove();
      }
    });
    this.sservice.levelModule(student,"Year 2").subscribe(data => {
      SubofYear = data;
      var i = 0 ;
      for (;i<SubofYear.length;i++){
        console.log('classes/'+SubofYear[i].moduleNo+'/students/'+student);
        firebase.database().ref('classes/'+SubofYear[i].moduleNo+'/students/'+student).remove();
      }
    });
    this.sservice.levelModule(student,"Year 3").subscribe(data => {
      SubofYear = data;
      var i = 0 ;
      for (;i<SubofYear.length;i++){
        console.log('classes/'+SubofYear[i].moduleNo+'/students/'+student);
        firebase.database().ref('classes/'+SubofYear[i].moduleNo+'/students/'+student).remove();
      }
    });
    this.sservice.levelModule(student,"Year 4").subscribe(data => {
      SubofYear = data;
      var i = 0 ;
      for (;i<SubofYear.length;i++){
        console.log('classes/'+SubofYear[i].moduleNo+'/students/'+student);
        firebase.database().ref('classes/'+SubofYear[i].moduleNo+'/students/'+student).remove();
      }
    });
  }

  NextLevel(username, selected, length){
    var current: string;
    console.log('https://surge-44d21.firebaseio.com/batches/'+selected+'/students/' +username+'/Level.json');
    this._http.get<Batch[]>('https://surge-44d21.firebaseio.com/batches/'+selected+'/students/' +username+'/Level.json')
    .catch(this.handleError).subscribe(data => {
      current = data;
      if ( current == "Year 1"){
        firebase.database().ref('batches/'+selected+'/students/' +username+'/Level').set("Year 2");
      }else if ( current == "Year 2"){
        firebase.database().ref('batches/'+selected+'/students/' +username+'/Level').set("Year 3");
      }else if (current == "Year 3"){
        firebase.database().ref('batches/'+selected+'/students/' +username+'/Level').set("Year 4");
      }else if (current == "Year 4"){
        firebase.database().ref('batches/'+selected+'/students/' +username+'/Level').set("Graduated");
      }
    });
  }

  createBatch(batch: Batch, index: number): Observable<Batch> {
      return this._http.put<Batch>('https://surge-44d21.firebaseio.com/batches/' + index + '.json', batch)
          .catch(this.handleError);
  }

  saveBatchlist(username, selected, length){
    this.deletefromclasses(username);
    firebase.database().ref('/batches/' +selected).update({
      total : length-1
    });
    firebase.database().ref('/batches/' +selected+'/students/' +username).remove();
  }

  listBatches(): Observable<Batch[]> {
      return this._http.get<Batch[]>('https://surge-44d21.firebaseio.com/batches.json')
          .catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
      console.log(err.message);
      return Observable.throw(err.message);
  }

  listStudents(batchcode): Student[] {
    var finallist : Student[];
    finallist = [];
    var nodata = 0;
    firebase.database().ref('batches/' + batchcode+'/students/').on('child_added', function(data) {
        finallist[nodata]=data.val();
        nodata = nodata + 1;
      });
      console.log(finallist);
      return finallist;
  }
  Addnewstudent(student, index, nextid){
    firebase.database().ref('/batches/' +student.bindex).update({
      nextid : nextid,
      total : index+1
    });
    console.log(student.bindex);
    console.log(student.ID);
    firebase.database().ref('/batches/' +student.bindex+'/students/'+student.ID).set({
      Address : student.Address,
      ID : student.ID,
      Level : student.Level,
      NIC : student.NIC,
      batchcode : student.batchcode,
      bindex : student.bindex,
      contact : student.contact,
      email : student.email,
      fname : student.fname,
      password : student.password,
      role : student.role,
      ps : student.ps,
      username : student.username
    });

  }

  checkbatchname(bname){
    var exists : boolean = false;
    firebase.database().ref('batches').on('child_added',function(data){
      if(data.val().name == bname ){
        exists = true;
        console.log("d");
      }
    });
    return Observable.of(exists);
  }
}
