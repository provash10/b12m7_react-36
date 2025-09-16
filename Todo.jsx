// export default function ToDo(){
//     return(
//         <li>Task :</li>
//     )
// }

// export default function ToDo({task,isDone}){
//     return(
//         <li>Task : {task}</li>
//     )
// }

// export default function ToDo({task,isDone, time=0}){
//     if(isDone === true){
//         return <li>Done: {task} duration: {time}</li>
//     }
//     else{
//         return <li>Do Now: {task}</li>
//     }
    
// }

//conditional rendering: 2 ternary

//condition ? true : false

// export default function ToDo({task,isDone, time=0}){
//     return isDone ? 
//     <li>Done : {task} time : {time}</li> : 
//     <li>Not Done : {task}</li>
// }

//conditonal randering : 3 &&

// export default function ToDo({task,isDone, time=0}){
//     return isDone && <li>Done Tasks: {task} time : {time}</li>
    
// }

//conditonal randering : 4 ||

// export default function ToDo({task,isDone, time=0}){
//     return isDone || <li>Not Done Tasks: {task} time : {time}</li>
    
// }


//conditonal randering : 5 ||
// export default function ToDo({task,isDone, time=0}){
//     if(isDone === true){
//         return null;
//     }
//     else{
//         return <li>Pending: {task}</li>
//     }
    
// }


//conditonal randering : 6 use variable
export default function ToDo({task,isDone, time=0}){
    
    let listItem ;
    if(isDone === true){
        listItem = <li>Done Okk: {task}</li>
    }
    else{
        listItem = <li>Pending: {task}</li>
    }

    return listItem
    
}
