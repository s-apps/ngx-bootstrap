import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ){}

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    this.modalRef.hide();
  }

  openUrl(url: string){
    window.open(url, '_blank');
  }

}
