import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Student } from './../shared/student';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {
  Student: Student[];
  hideWhenNoStudent: boolean = false; // Initial data table list state
  noData: boolean = false;   // No Data state
  preLoader: boolean = true; // Preloader state
  

  constructor(public crudApi: CrudService){ }


  // Initialize student's list, when component is ready
  ngOnInit() {
    this.dataState();
    let s = this.crudApi.GetStudentsList();
    // Using snapshotChanges() to retrieve list of data along with metadata($key)
    s.snapshotChanges().subscribe(data => {
      this.Student = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Student.push(a as Student);
      })
    })
  }

  dataState() { 
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => { // valueChanges() method gets simple list of data. Updates data as the changes occur in real-time.
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }

  deleteStudent(student) {  // Delete student
    if (window.confirm('Are sure you want to delete this student ?')) {
      return this.crudApi.DeleteStudent(student.$key)
    }
  }


}
