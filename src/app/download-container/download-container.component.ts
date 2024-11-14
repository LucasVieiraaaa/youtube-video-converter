import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-download-container',
  templateUrl: './download-container.component.html',
  styleUrls: ['./download-container.component.scss']
})
export class DownloadContainerComponent implements OnInit {

  loading: boolean = false;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  convertURL(){
    this.loading = true
    if (this.loading == true) {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 500);
    }
  }
}
