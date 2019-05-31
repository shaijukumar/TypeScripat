//=============================================
//Calsses, Object, Access modifiers, Properties
//=============================================
class Point{

    //Access modifiers: public    private   protected
    //by default public

    //public x:number;
    //protected y:number;
    //private z:number;

    //Only one constructor,no overloading
    //Can make parameter optional by adding ?
    //Access modifiers in constructorparameter will genrate fields
    constructor(private _x:number,private _y:number, public z?:number){
        //this.x = x;
        //this.y = y;        
        //this.z = z;
    }

    //Properties
    get x(){
        return this._x;
    }
    set x(value){
        if(value < 0 ){
            throw new Error('value cannot be less tahn 0.')
        }

        this._x = value;
    }


    draw(){
        console.log("X : " + this._x + "Y : " + this._y );
    }

    getDistance(another:Point){
        console.log("X : " + another._x + "Y : " + another._y );
    }
}

//let point:Point = new Point();
let point = new Point(10,20);
point.z = 30;

point.x = 100;//property

point.draw();