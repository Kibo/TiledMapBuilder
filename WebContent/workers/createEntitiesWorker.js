onmessage = function(event) {
  
  var info = event.data;
  
  var info = event.data;
  var result = info + ' dejme se na pochod!';
  postMessage(result);   
};