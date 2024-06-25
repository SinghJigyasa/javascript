
const objectItem = [
    { keyss: "sample1", data: "data1" },
    { keyss: "sample2", data: "data2" },
    { keyss: "sample1", data: "data1" },
    { keyss: "sample3", data: "data3" },
    { keyss: "sample1", data: "data1" },
    { keyss: "sample3", data: "data3" },
    { keyss: "sample1", data: "data1" },
  ];


//   {
//     sample1: [{   data: "data1",   key: "sample1"}, {   data: "data1",   key: "sample1"}, {   data: "data1",   key: "sample1"}, 
//                        {   data: "data1",   key: "sample1"}],  
//     sample2: [{   data: "data2",   key: "sample2"}], 
//     sample3: [{   data: "data3", key: "sample3" }, { data: "data3", key: "sample3" }]
//     }

const output= objectItem.reduce((acc,curr)=>{
    if(acc[curr.key]){
         acc[curr.keyss]=[]
    acc[curr.keyss].push(curr);
    }
    return acc
},{})

let obj={}
 const result= objectItem.forEach((item)=>{
    if(obj[item.keyss]){
        obj[item.keyss].push(item)
    }else{
        obj[item.keyss]=[]
    }
 })

 console.log(result,obj)
// const result = objectItem.forEach((items)=>{
//    let newval= output.map(values=>{
//         items.keyss === values
//     })
//     return newval
// })
// console.log(result)
console.log(output)