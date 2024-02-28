import Child from "./Child";


function App() 
{
  //let name = "Prasad" , name1 = "raj" , name2 = "vani";
  let name = ["sarvesh","chandan","jayant"];
  //let age = 20 , age1 = 25 , age2 = 30 ;
  let age = [24,15,24];
  return (
    <div >
    {name.map((na,index)=><Child na={na} age={age[index]} key={index}/>
    )
    }
    </div>
  );
}

export default App;
