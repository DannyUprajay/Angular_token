import {Component, OnInit} from '@angular/core';
import {PortableInterface} from "../portable.interface";
import {PortableService} from "../portable.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-portable',
  templateUrl: './portable.component.html',
  styleUrls: ['./portable.component.css']
})
export class PortableComponent implements OnInit{

  listPortable:PortableInterface[] = [];
  message:string= '';
  constructor(
private service: PortableService
  ) {
  }

  ngOnInit() {
    this.getPortable();

  }

  getPortable(){
    this.service.getAllPortable().subscribe(Portables => {
      this.listPortable = Portables;
      console.log(this.listPortable);
    });
  }

  onSubmit(form: NgForm){
    this.service.addPortabable(form.value).subscribe({
    complete:()=>{
      form.reset();
      this.message= 'tout est ok';
      this.getPortable();
    }
    })
  }


}
