import { Component, OnInit } from '@angular/core';
import { MailService } from '../../global-data/mail-service/mail-service.service';

@Component({
  selector: 'app-compose-side-bar-right',
  templateUrl: './compose-side-bar-right.component.html',
  styleUrls: ['./compose-side-bar-right.component.css']
})
export class ComposeSideBarRightComponent implements OnInit {

  constructor(private mailService: MailService) { }

  ngOnInit(): void {
  }
  downloadSampleCsv(){
    this.mailService.getCsvSample().subscribe((res)=>{
      console.log(res);

      const a = document.createElement('a');
      const blob = new Blob([res.csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);

      a.href = url;
      a.download = 'myFile.csv';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      
    })
  }
  
  uploadImage1Click(){
    (document.getElementById('uploadimage1Clck') as HTMLInputElement).click();
  }

  
  isCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }
  fileChanged1($event: any): void {

    var text = [];
    var files = $event.srcElement.files;

    if (this.isCSVFile(files[0])) {
      var input = $event.target;
      var reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
          let csvData = reader.result;
          let lines = (csvData as string).split(/\r\n|\n/);
          // console.log(lines);
          let recordsList = []
          for (let i = 1; i < lines.length; i++) {
            const rec = lines[i].split(',');
            let recObj = {
              name: rec[0],
              email: rec[1],
              status: rec[2]
            }
            // console.log(recObj);  
            if (recObj.name != "" && recObj.email != "") {
              recordsList.push(recObj)
            }
          }
          this.mailService.setContactsList(recordsList)
          
      }

      reader.onerror = function() {
          alert('Unable to read ' + input.files[0]);
      };
      } else {
            alert("Please import valid .csv file.");
            // this.clickUploadCsv();
      }
  }

}
