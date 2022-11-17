Function.prototype.customCall = function (context,...other) {
  if(typeof this === "undefined"){
    throw  "111"
  }
  console.log(arguments,'llll')
  context = context||window;
  context.fn = this;
  const result = context.fn(other)
  delete context.fn
  return result
}
console.log(Math.max.call([1,2]))