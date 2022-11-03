const src = {
    id : 12, 
   name : 'Mr Wiggles',
   values : [ { x : 1, y : 3 }, { x : 100, y : 2.1 } ],
   alternates : { id : 16, alias : 'Wig' },
   history : [ ]
}

let src2 = src;
src2.name = 'Mrs Wiggles'

src2.values[1].x = 200 

delete src2.values[0].x

console.log(src)
console.log(src2)

let arr = [1,2,3]

console.log(arr)

arr.splice(1,1)

console.log(arr)

const devices = ["0x00077C98", "0x00078D38", "0x0007964F"]
const deviceDataArr = []
const deviceDataArr2 = []

// For Each
devices.forEach((device, index) => {
	console.log(`http://a.url.com/device/` + device )
	
	deviceDataArr[index] = device;
	

})


// For Loop
for(var index=0; index<devices.length; index++){
	console.log(`http://a.url.com/device/` + devices[index] )
	
	deviceDataArr2[index] = devices[index];
}

console.log(deviceDataArr)
console.log(deviceDataArr2)

class T {
    constructor(width, height) {
        this. width = width;
        this.height = height;
        this.area = 0;
    }

    getArea() {
        console.log(this.width* this.height)
    }

    setWidth(w) {
        this.width = w
        console.log(this.width)
    }
}

let newClass = new T(2, 6)
newClass.getArea()
newClass.setWidth(20)
newClass.getArea()

const mysql = require('mysql')

function queryDb(tableName, value, cb) {
    const connection = mysql.createPool({...})

    const query = 'SELECT * FROM ' + tableName + ' WHERE Time < ' + value 

    let results = mysql.query(query, [tableName, value])
    return results
}


// This event handler loses its implicitly bound context. 
// The onButtonClick needed to be binded to the React class component


// We can bind the event handler inside of the constructor function
class MyPane extends React.Component {
    constructor( props ) {
      super( props )
      this.onButtonClick = this.onButtonClick.bind(this)
    }
    onButtonClick( ) {
      // do stuff
    }
    render( ) {
       return <Button onClick={this.onButtonClick}>Click Me</Button>
    }
 }

 // Or we can use arrow function in the callback
 class MyPane extends React.Component {
    constructor( props ) {
      super( props )
    }
    onButtonClick( ) {
      // do stuff
    }
    render( ) {
       return <Button onClick={()=>this.onButtonClick()}>Click Me</Button>
    }
 }
 
 // I prefer using functional component to avoid binding all event handler, or in class component,
 // we can use arrow function to automatically binds the handlers to the scope they are defined in.