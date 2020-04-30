function math()  {
    this.cong= function(a, b) {
      return a + b;
    },
    this.sum= function(a){
        return a.reduce(function(a,b){
          return a+b;
        },0);
    }
  };
  
  module.exports = math;