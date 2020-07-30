({
	init: function(component) {
        var recID = component.get("v.recordId");
        var action = component.get('c.getCase');
        action.setParams({
            "CaseId": recID
        });
 		
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.myCase", response.getReturnValue())
            }
        });
        $A.enqueueAction(action);     
    }
})