import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileUploader} from 'ng2-file-upload';

const uploadSaveUrl = 'http://192.168.1.5:3000/upload/new/';


@Component({
  selector: 'app-kendo-upload',
  templateUrl: './app-kendo-upload.component.html',
})
export class AppKendoUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: uploadSaveUrl});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;


  constructor(public http: HttpClient) {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  /*selectE ventHandler(e) {
    console.log(e);
    this.pushFileToStorage(e.files[0]).subscribe((res) => {
      console.log(res);
    })
  }*/

  /*pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.uploadSaveUrl, file, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }*/

 /* clearEventHandler(e) {
    console.log(e);
  }

  removeEventHandler(e) {
    console.log(e);
  }

  completeEventHandler(e) {
    console.log(e);
  }*/

  ngOnInit() {

  }
}
