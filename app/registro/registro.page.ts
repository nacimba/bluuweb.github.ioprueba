import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx'; // me va permitir renderizar la imagen para guardarla como archivo
import { PhotoService } from '../services/photo.service';
import {Photo } from '../models/foto.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage{

  public photos: Photo[]=[];

  //image: string;

  
 // constructor (private
    //private camera: Camera,
    //private webView: WebView
 // ) {}
 constructor(private photoService: PhotoService) {}

  ngOnInit() {
  
  this.photoService.loadSaved().then (
    () => {

      this.photos = this.photoService.getPhotos();
    }





  )
}

 public newPhoto(): void {
   this.photoService.addNewToGallery();
 }

  //takePicture() {
   // const options: CameraOptions = {
    //  quality: 100,
     // destinationType: this.camera.DestinationType.FILE_URI, // esto es para guardar la imagen la quiero como archivo
    //  encodingType: this.camera.EncodingType.JPEG,
    //  mediaType: this.camera.MediaType.PICTURE,
    //  sourceType: this.camera.PictureSourceType.CAMERA // puedo elegir con que tomar la foto o sacarla de la galeria pero nosotros usaremos la camara
    //};
   // this.camera.getPicture(options)
   // .then((imageData) => {
    //  this.image = this.webView.convertFileSrc(imageData); // esta es la imagen que guardaremos en algun lugar
   // }, (err) => {
    //  console.log(err);
    //});
  //}

}
