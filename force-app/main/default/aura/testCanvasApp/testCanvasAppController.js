({
	doInit : function(component, event, helper) {
		var action = component.get("c.sendOpportunityDetails");
        // set param to method
        action.setParams({
        	'opportunityID': component.get("v.recordId")
        });  
        // set a callBack
        action.setCallback(this, function(response) {
                var state = response.getState();   
                if (state === "SUCCESS") {
                    var storeResponse = response.getReturnValue(); 
                    component.set("v.paramsTopass",storeResponse);
                }         
        });
        // enqueue the Action
        $A.enqueueAction(action);
	}
})