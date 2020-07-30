({
	doInit : function(component,event,helper){
        var recordId = component.get("v.recordId");
        var nextRecId = '';
        var action = component.get('c.getNextCaseId');
        action.setParams({
            "prevCaseId": recordId,
            "nextOrPrev": "Prev"
        });
 		
        action.setCallback(this, function(response) {
            //store state of response
            var state = response.getState();
            console.log('=======+++===='+state);
            if (state === "SUCCESS") {
                nextRecId =  response.getReturnValue(); 
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                  "recordId": nextRecId,
                  "slideDevName": "detail"
                });
                navEvt.fire();
            }
        });
        $A.enqueueAction(action); 
        console.log('==========='+nextRecId);
		
	}
})