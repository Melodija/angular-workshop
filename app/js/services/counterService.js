counterApp.service('counterService',function(){
  this.counters = [{count: 0}, {count: 0}];

  this.increment = function(counter) {
    counter.count++;
  };

  // Now get them to build this using a basic app, and add decrement
  // Now add a second counter
  // Now add five counters
  this.decrement = function(counter) {
    counter.count--;
  };
});
