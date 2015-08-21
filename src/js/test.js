function Person(name){
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(this.name);
};
