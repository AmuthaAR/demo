let res=fetch("https://www.anapioficeandfire.com/api/books");
async function getdata(){
  try{
    let result=await fetch(`https://www.anapioficeandfire.com/api/books/11/12`);
    let res1=await result.json();
    console.log(res1);
    for(var i in res1){
      console.log()
    }
  }
   
  catch(error)
  {
    //console.log(error);
  }
  }
  getdata();



res.then((data)=>{
  return data.json();
}).then((data)=>{
  console.log(data)
  for(var i in data){
    console.log(`
                 [{
                 "name:${data[i].name}"

                 "isbn:${data[i].isbn}" 

                 "numberOfPages:${data[i].numberOfPages}"

                 "publisher:${data[i].publisher}"

                 "released:${data[i].released}" 

                 "authors:${data[i].authors}"

                 "characters:${data[5].characters}"
                 }]`)
  }
}).catch((error)=>console.log(error));

