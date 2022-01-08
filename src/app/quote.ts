export class Quote {
  // id!: number;
  // text!: string;
  // author!: string;
   // name!: string;
   // description!: string;
  // completeDate!: Date;
  showDescription: boolean;
  constructor(public id: number,public text: string,public author: string,public name: string,public description: string,public completeDate: Date){
    this.showDescription=false;
  }
}
