const startTime = new Date();

const doneMessage = function()
{
  console.log('さぁ出社するよ!!');
  var endTime = new Date();
  console.log(endTime - startTime + 'ms');
};

const TASKS = {
  A: 15,
  B: 5,
  C: 20,
  D: 5,
};
var dones = {
  A: false,
  B: false,
  C: false,
  D: false,
};

const done = function(target)
{
  console.log(target + ' done');
  dones[target] = true;
  if(dones.A && dones.B && dones.C && dones.D) doneMessage();
}

const runTask = function(target, cb)
{
  setTimeout(cb, TASKS[target]* 1000);
};

runTask('A', function(){
  done('A');
  runTask('B', function(){
    done('B');
  })
});
runTask('C', function(){
  done('C');
  runTask('D', function(){
    done('D');
  })
});
