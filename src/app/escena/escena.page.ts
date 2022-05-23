import { Component, OnInit } from '@angular/core';
import { CameraService } from '../services/camera.service';
@Component({
  selector: 'app-escena',
  templateUrl: './escena.page.html',
  styleUrls: ['./escena.page.scss'],
})
export class EscenaPage implements OnInit {

  constructor(private cameraService: CameraService) { }

  ngOnInit() {
  }
  close(){
  }
}
