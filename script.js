let res=fetch('https://data.covid19india.org/v4/min/data.min.json');
console.log(res);
res.then((data)=>{
return data.json();
}).then((data)=>
{
  console.log(data);
  foo(data);
}).catch((error)=>console.log(error));



function foo(data) {
  console.log(data.TN.districts.Chennai.total);
}