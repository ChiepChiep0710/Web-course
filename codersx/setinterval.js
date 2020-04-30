//viest hàm đếm từ 1 đến 10 trả về 1 promise.
function countFrom(a,b){
	
	return new Promise((resolve,reject)=>{
    var id=setInterval(()=>{
		console.log(a);
		a++;
		if(a>b){ 
      clearInterval(id);resolve();
    }
			
	},1000);
		
	});
}
countFrom(1,10).then(function(){
	console.log('done');
});
/*
/*
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
    var id=setInterval(()=>{
      console.log(x);
      x--;
      if(x<0){

         clearInterval(id);
       console.log('happy new year.');
      }
      
    });
}

countDown(5);

/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
    return new Promise((resolve,reject)=>{
        var id=setInterval(()=>{
            console.log(x);x--;
            if(x<0)
            {
              clearInterval(id);
              resolve();
            }
            
        },1000);
    });
}

function sayHappyNewYear() {
  console.log('Happy new year');
}

countDown(5).then(sayHappyNewYear);