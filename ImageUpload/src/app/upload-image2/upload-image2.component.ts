import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , FormControl} from '@angular/forms'
import { HttpService } from '../../app/http.service';

@Component({
  selector: 'app-upload-image2',
  templateUrl: './upload-image2.component.html',
  styleUrls: ['./upload-image2.component.css']
})
export class UploadImage2Component implements OnInit {
  imagePath;
  imgURL: any;
  uploadForm: FormGroup;
  FilesUpload :File=null;
  images;
  ImageTitle ;
  
  constructor(private FB: FormBuilder, private http: HttpService) { }
  
  ngOnInit() {
    this.uploadForm = this.FB.group({
      ImageTitle: new FormControl (),
      images: new FormControl (),
    })
  }
  
  
  // selectImage(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.file = file;
  //   }
  // }
 
  preview(file :FileList) {
    this.FilesUpload =file.item(0)
    if (file.length === 0)
      return;
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  onSubmit(){
    console.log("OnFormSubmit")
  
    
    const formData: FormData = new FormData();
    formData.append('ImageTitle', this.ImageTitle);
    formData.append('file', this.FilesUpload, this.FilesUpload.name);
    this.http.post('/add-uploadImage',formData).subscribe(
      data=>{

        (res) => console.log(res);
        (err) => console.log(err) 
      }  
        );
  }
}
