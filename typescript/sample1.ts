interface studentI{
    name:string;
email:string;
phone:number;
}
class studentC implements studentI{
    public name:string;
    public email:string;
    public phone:number;
    constructor(){
        this.name="srinivas";
        this.email="anushamanda@gmail.com";
        this.phone=7330919021;
    }
    public getData(){
console.log(this.name,this.email,this.phone);
    }
}
interface studentDataI{
    city?:any;
    adress:any;
}
class studentDataC extends studentC implements studentDataI{
    public state:any;
    public adress="hyderabad";
    constructor(){
        super();
    }
getFullData(){
    console.log(this.adress);
    this.getData();
}
}
var student=new studentDataC();
student.getFullData();