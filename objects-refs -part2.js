'use trsict';

class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        //this.assagnee = null;
        this.done = false;
    }

    markedAsDone(){
        if(this.done === false){
           this.done= true;
        }
    }
}


class User  {
constructor(name, job){
    this.name = name;
    this.job = job;
    this.tasks = [];
}

assignTask (task) {
    if(task instanceof Task) {
        this.tasks.push(task);
    } else {
        console.error("Only objects of type Task can be assigned !!!");
    }
}

allDoneTasks(){
    let doneTasks=[];

for(let index= 0; index < this.tasks.length; index++){

    if(this.tasks[index].done){
      doneTasks.push(this.tasks[index]);
    }    

}
  return doneTasks;
}

allPendingTasks(){

    let pendingTasks = [];
     this.tasks.forEach(item=> {
        if(item.done=== false){
             pendingTasks.push(item);
        }
    })
return pendingTasks;
}

// unassignTasks(title){
//     this.tasks  =  this.tasks.filter(task => task.title !== title);
 
// }

unassignTasks(title){

  this.tasks.splice(this.tasks.findIndex(task => task.title),1);

}
}
//give 2 tasks to User

let taskProject1 = new Task('Finish project 1', '01-06-2023');
let taskProject2 = new Task('Finish project 2', '01-07-2023');

let userDev1 = new User('Jana Leon', 'developer');
userDev1.assignTask(taskProject2);
//console.log(taskProject2.done)
taskProject2.markedAsDone();
//console.log(taskProject2.done);
console.log(userDev1);
userDev1.assignTask(taskProject1);
//console.log(userDev1.allDoneTasks());
// console.log(userDev1.allPendingTasks());
 
userDev1.unassignTasks('Finish project 1');
console.log(userDev1);
