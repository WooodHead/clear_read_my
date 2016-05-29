

chrome.browserAction.onClicked.addListener(function(tab){
	alert('onClicked '+tab.id);
	
	chrome.tabs.query({active:true,currentWindow:true},
	function(tabs){
		chrome.tabs.sendMessage(tabs[0].id,{msg:'clear'},function(res){
			alert('background get response: '+res.msg);
		});
		});
	});
	
	chrome.runtime.onMessage.addListener(function(req,sender,sendResponse){
		alert('background get request: '+req.msg);
		chrome.tabs.create({"url":"http://127.0.0.1"});
	});