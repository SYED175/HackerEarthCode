//Insert code below
class Encapsul{


    //Setter
    constructor(name,id,age,BU){
        this.name = name;
        this.id = id;
    }
    
    //getter
    display(){
        console.log("UserName is "+this.name+" and the id:"+this.id);
        console.log("His age is "+this.age+" his Unit is"+ this.BU);
    }
    
        
    };
    
    
    obj1 = new Encapsul("Syed",4329,21,"JAVA");
    obj1.display();
    
    document.getElementById("demo").innerHTML = obj1.name+" his ID is "+obj1.id;
    