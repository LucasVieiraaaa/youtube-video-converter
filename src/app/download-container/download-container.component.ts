import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import * as ytdl from 'ytdl-core';

@Component({
  selector: 'app-download-container',
  templateUrl: './download-container.component.html',
  styleUrls: ['./download-container.component.scss']
})
export class DownloadContainerComponent implements OnInit {

  loading: boolean = false;
  stringURL: string = '';
  formatOption: string = '';

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  convertURL(){
    this.loading = true
    if (this.loading == true) {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    }
    console.log("chegou aqui " +this.stringURL)
    console.log("chegou aqui " +this.formatOption)
  }
}
