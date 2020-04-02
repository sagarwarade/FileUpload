import { Component, OnInit } from '@angular/core';
import { UploadImageService } from './upload-image.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  imageUrl: string = "/assets/images.jpg";
  fileToUpload: File = null;
  constructor(private imageService : UploadImageService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(ImageTitle,Image){
   this.imageService.postFile(ImageTitle.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done.. Image inserted successfully');
       ImageTitle.value = null;
       Image.value = null;
       this.imageUrl = "/assets/images.jpg";
     }
    
   );
   alert("image uploaded successfully");
  }

}
