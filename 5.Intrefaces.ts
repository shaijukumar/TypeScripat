//=========================================
//Intrefaces
//=========================================
//Pascal nameing convension
//Only for declarations
//no implimentation
interface PointInr{
    x:number,
    y:number
}

let drawPoint = (point:PointInr) => {
    console.log("X : " + point.x + "Y : " + point.y );
}