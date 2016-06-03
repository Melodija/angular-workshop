// counterApp.factory('ExampleFactory', function(){
//   var UserFactory = function() {
//     this.currentTime = Date();
//   };
//
//   UserFactory.prototype.storeTime = function() {
//     this.currentTime = Date();
//   };
//
//   return UserFactory;
// });
//
// counterApp.service('ExampleService', function(){
//   this.currentTime = Date();
//
//   this.storeTime = function() {
//     this.currentTime = Date();
//   };
// });

// counterApp.controller('ExampleCtrl', ['counterService', function(counterService){
//
//   var self = this;
//
//   // self.exampleFactory = new ExampleFactory;
//   self.counterService = counterService;
// }]);

counterApp.controller('CounterCtrl', ['counterService', function(counterService){
  var self = this;

  self.counterService = counterService;

  
  // self.counters = [{count: 0}, {count: 0}];

  // Now add buttons
  // self.increment = function(counter) {
  //   counter.count++;
  // };
  //
  // // Now get them to build this using a basic app, and add decrement
  // // Now add a second counter
  // // Now add five counters
  // self.decrement = function(counter) {
  //   counter.count--;
  // };
}]);
