
function clear(){
	var body=document.body;
	var children=body.children;
	alert('children count: '+children.length);

	var imgs=document.body.getElementsByTagName("img");

	for(var i=imgs.length-1;i>=0;i--){
		imgs[i].parentNode.removeChild(imgs[i]);
	}
}


chrome.runtime.onMessage.addListener(
function(request,sender,sendResponse){
	if(request.msg==="clear"){
		clear();
	}
	
	//alert('content_script receive request: '+request.msg);
	//document.body.style.background='yellow';


	sendResponse({msg:'already change color'});
		//chrome.runtime.sendMessage({msg:'please open new tab'});
	
});