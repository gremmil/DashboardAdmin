import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';
@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {

  @ViewChild('scanner', { static: false })
  //@ViewChild('canvasScann') canvas: ElementRef

  private scanner: ZXingScannerComponent;
  public scannerEnabled: boolean = false;
  public desiredDevice: MediaDeviceInfo;
  public torch: boolean = false;
  public canvasElement: HTMLCanvasElement;
  public canvasContext: CanvasRenderingContext2D;

  public allowedFormats: BarcodeFormat[] = [

    BarcodeFormat.AZTEC, BarcodeFormat.CODABAR, BarcodeFormat.CODE_39, BarcodeFormat.CODE_93,

    BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX, BarcodeFormat.EAN_8, BarcodeFormat.EAN_13, 
    
    BarcodeFormat.ITF, BarcodeFormat.MAXICODE, BarcodeFormat.PDF_417, BarcodeFormat.QR_CODE,

    BarcodeFormat.RSS_14, BarcodeFormat.RSS_EXPANDED, BarcodeFormat.UPC_A, BarcodeFormat.UPC_E, BarcodeFormat.UPC_EAN_EXTENSION

]
  public imgScanner: string = '';

  constructor() { }

  ngOnInit() {
  }

  commenzarScanneo(): void {
    this.scannerEnabled = true
    this.torch = true
  }

  onTorchCompatible($event){
    console.log('onTorchCompatible', $event);
  } 
  camerasFoundHandler($event) {
    this.desiredDevice = $event[0]
    console.log(this.desiredDevice);

    console.log('camerasFoundHandler', $event);
  }
  camerasNotFoundHandler($event){
    console.log('camerasNotFoundHandler', $event);
  } 
  scanSuccessHandler($event) {
    console.log('scanSuccessHandler', $event);
  }
  scanErrorHandler($event) {
    console.log('scanErrorHandler', $event);
  } 
  scanFailureHandler($event) {
    console.log('scanFailureHandler', $event);
  }
  scanCompleteHandler($event) {

    if($event) {

      /*this.canvasElement = this.canvas.nativeElement;
      this.canvasContext = this.canvasElement.getContext('2d');*/

      this.scannerEnabled = false;

    }
    console.log('scanCompleteHandler', $event);
    
  }

  ToBase64(u8) {
   return btoa(String.fromCharCode.apply(null, u8));
  }

}