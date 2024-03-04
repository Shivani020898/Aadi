var myform = document.getElementById('form')
console.log(myform)

const collectionOfData=[]

myform.addEventListener('submit',handelsubmit)

function handelsubmit(event){
    event.preventDefault()

    var Ename = document.getElementById('Ename').value;
    var EId = document.getElementById('EId').value;
    var Department = document.getElementById('Department').value;
    var Experience = document.getElementById('Experience').value;
    var Mail = document.getElementById('mail').value;
    var Mnumber = document.getElementById('number').value;

    console.log('EmployeeName:',Ename)
    console.log('EmployeeId:',EId)
    console.log('department:',Department)
    console.log('Experience:',Experience)
    console.log('mail:',Mail)
    console.log('number:',Mnumber)
    
    const data = {
        DName: Ename ,
        DEmpID: EId,
        DDepartment: Department,
        DExp: Experience,
        DEmail: Mail ,
        DMobile: Mnumber 
    };
    //  console.log(data)
    //   document.querySelector('form').reset()

     collectionOfData.push(data)
     console.log(collectionOfData)

    // collectionOfData.forEach(function(i){
        // console.log(i)
    // })
    

    Display(collectionOfData);
}

function Display(collectionOfData){
    document.querySelector("tbody").innerHTML ="";

    collectionOfData.forEach(function(data){

    let tr = document.createElement("tr")

    let name = document.createElement("td")
    name.innerText = data.DName

    let id = document.createElement("td")
    id.innerText = data.DEmpID

    let department= document.createElement("td")
    department.innerText = data.DDepartment

    let exp = document.createElement("td")
    exp.innerText = data.DExp

    let email = document.createElement("td")
    email.innerText = data.DEmail

    let Mob = document.createElement("td")
    Mob.innerText = data.DMobile

    let role = document.createElement("td")

    let roleText = giveRole(data.DExp)
    role.innerText = roleText

    let DeleteElement = document.createElement("td")

    DeleteElement.innerText = "Delete"
    DeleteElement.style.cursor = "pointer"

    DeleteElement.addEventListener("click",function(event)
    {
        event.target.parentNode.remove()
    })

    DeleteElement.style.backgroundColor = "Red"
    


    tr.append(name,id,department,exp,email,Mob,role,DeleteElement)
    document.querySelector("tbody").append(tr)


    })
        
    }

   function giveRole(DExp)
   {
    if(DExp>5){
        return "Senior"
    }
    else if(DExp>=2 && DExp<=5){
        return "Junior"
    }
    else if(DExp<=1){
        return"Fresher"
    }
   }
