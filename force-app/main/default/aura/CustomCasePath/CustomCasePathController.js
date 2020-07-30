({
    handleSelect : function (component, event, helper) {
        
        var cmps = component.find("path")+"";
    	console.log('----------------'+cmps)
     var stepName = event.getParam("detail").value;
     var toastEvent = $A.get("e.force:showToast");
     toastEvent.setParams({
       "title": "Success!",
        "message": "Toast from " + stepName
        });
        toastEvent.fire();
    }
})