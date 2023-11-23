const fs = require('fs');

const tasks= JSON.parse(fs.readFileSync('./tasklist.json'));

exports.getAllTask= (req,res)=> {
    res
    .json(tasks);
};

exports.get1Task= (req,res)=> {
    const taskId=parseInt(req.params.id);
    //console.log(JSON.stringify(req.query));
    //console.log( JSON.stringify(req.params));
    const task=tasks.find(task=>task.id==taskId);
    if (!task) {
      res
      .status(404)
      .json({error:'Task not found'});
    } 
    else {
      res
      .json(task);
    }
};

exports.createTask= (req,res)=> {
    const {name}=req.body;
    if (!name||name.trim()==='') {
      res
      .status(400)
      .json({error:'Task name is required and cannot be empty'});
    } 
    else {
      const newTask= {
        id:tasks.length+1,
        name:name,
      };
      //console.log(newTask)
      tasks.push(newTask);
      res
      .status(201)
      .json(newTask);
    }
};

exports.updateTask= (req,res)=> {
    const taskId=parseInt(req.params.id);
    //console.log(JSON.stringify(tasks));
    const taskIndex=tasks.findIndex(task=>task.id==taskId);
    if (taskIndex===-1) {
      res
      .status(404)
      .json({error:'Task not found'});
    } 
    else {
      const {name}=req.body;
      if (!name||name.trim()==='') {
        res
        .status(400)
        .json({error:'Task name is required and cannot be empty'});
      } 
      else {
        tasks[taskIndex].name=name;
        res
        .json(tasks[taskIndex]);
      }
    }
};

exports.deleteTask= (req,res)=>{
    const taskId=parseInt(req.params.id);
    //console.log(taskId)
    const taskIndex=tasks.findIndex(task=>task.id==taskId);
    if (taskIndex!==-1) {
      tasks.splice(taskId-1, 1);
      res
      .json({message:'Task deleted successfully'});
    }
    else {
      res
      .status(404)
      .json({ error: 'Task not found' });
    }
};
