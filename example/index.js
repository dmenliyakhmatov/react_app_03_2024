// const stackElement = document.getElementById('stack');
// const microtaskElement = document.getElementById('microtask');
// const macrotaskElement = document.getElementById('macrotask');

// const getTask = name => {
//   const newTask = document.createElement('div');
//   newTask.innerHTML = name;
//   newTask.style.border = '1px solid black';
//   newTask.style.padding = '4px';
//   return newTask;
// };

// function createTask(name) {
//   const task = getTask(name);
//   stackElement.prepend(task);

//   debugger;

//   task.remove();

//   // setTimeout(() => {
//   //   ;
//   //   stackElement.innerHTML = '';
//   // });
// }

// function createMicroTask(name) {
//   createTask(`Creation microtask ${name}`);

//   const microTask = getTask(name);
//   microtaskElement.prepend(microTask);
//   debugger;
//   Promise.resolve().then(() => {
//     microTask.remove();
//     createTask(`Task from Microtask ${name}`);
//     debugger;
//     microTask.remove();
//   });
// }

// function createMacrotask(name) {
//   createTask(`Creation macrotask ${name}`);

//   const macroTask = getTask(name);
//   macrotaskElement.prepend(macroTask);
//   debugger;
//   setTimeout(() => {
//     macroTask.remove();
//     createTask(`Task from Macrotask ${name}`);
//     debugger;
//     macroTask.remove();
//   });
// }

// const fn1 = () => {
//   const task = getTask('fn1');
//   stackElement.prepend(task);

//   debugger;

//   task.remove();
// };
// //
// const fn2 = () => {
//   const task = getTask('fn2');
//   stackElement.prepend(task);

//   debugger;

//   fn1();

//   debugger;

//   task.remove();
//   createMicroTask('Micro 1');
// };
// //
// const fn3 = () => {
//   const task = getTask('fn3');
//   stackElement.prepend(task);

//   debugger;

//   fn2();

//   debugger;

//   task.remove();
//   createMacrotask('Macro 1');
// };

// createTask('Task 1');

// // fn3();

// createMacrotask('Macro 1'); //setTimout

// createTask('Task 2');

// createMicroTask('Micro 1'); //promise

// createMacrotask('Macro 2'); //setTimout

// createMicroTask('Micro 2'); //promise

// console.log('Start of script');
//
// setTimeout(function () {
//   console.log('Execute macrotask (setTimeout)');
// }, 0);
//
// Promise.resolve().then(function () {
//   console.log('Execute microtask (Promise)');
// });
//
// console.log('End of script');

// const fn1 = () => {
//   console.log('fn1 start');
//   console.log('fn1 finish');
// };
//
// const fn2 = () => {
//   console.log('fn2 start');
//   fn1();
//   console.log('fn2 finish');
// };
//
// const fn3 = () => {
//   console.log('fn3 start');
//   fn2();
//   console.log('fn3 finish');
// };
//
// setTimeout(function () {
//   console.log('Execute macrotask (setTimeout)');
// }, 0);
//
// fn3();

// console.log('1');

// const fn1 = () => {
//   console.log('fn1');
// };

// fn1();

// const fn2 = () => {
//   console.log('fn2');
// };

// const fn1 = () => {
//   console.log('fn1');

//   fn2();
// };

console.log('1');

setTimeout(() => {
  console.log('timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('promise callback');
  Promise.reject()
    .then(() => {
      console.log('promise callback 2');
    })
    .catch(e => {
      console.log('promise reject 2');
    });
});

setTimeout(() => {
  console.log('timeout callback 2');
}, 0);

// fn1();

console.log('2');

setTimeout(() => {}, 3000);
