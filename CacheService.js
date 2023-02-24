import NodeCache from "node-cache"

class CacheService extends NodeCache{

    constructor(){
        super()
    }

    pushIntoCache(key,value,ttl){
        let success=this.set(key,value,ttl)

        return success ? "Sucessfully Added to Cache" :"Something went Wrong"
    }
    
    getCacheData(key){
        let data=this.get(key)
        return data ? data : "No Data Found"
    }

    getAllkeys(){
        return this.keys()
    }

    haskey(key){
        return this.has(key)
    }
}


let cs=new CacheService();

let student={
    name:"Vivek",
    age:21,
    status:"Cool",
    "Role":"Developer"
}

console.log(cs.getAllkeys())

let data=cs.pushIntoCache(321,student,1000);
console.log(data)

let getData=cs.getCacheData(321)
console.log(getData)

console.log(cs.getAllkeys())

console.log(cs.getAllkeys().includes('321'))
let result
if(cs.haskey(3211)){
    result=cs.getCacheData(321);
}else{
    result="VIVEK JI NAMASTYE"
}
console.log("Result")
console.log(result)
