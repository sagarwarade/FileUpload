import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  constructor(private http : HttpClient) { }

  postFile(ImageTitle: string, fileToUpload: File) {
    const endpoint = environment.baseUrl + '/add-uploadImage';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    formData.append('ImageTitle', ImageTitle);
    return this.http
      .post(endpoint, formData);
  }
}
