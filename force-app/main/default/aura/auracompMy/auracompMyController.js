({
    isFocusedTabSubtab : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
             console.log('response' +JSON.stringify(response));
            var focusedTabId = response.tabId;
            console.log(focusedTabId);
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    doInit : function(component, event, helper) {
                var action = component.get('c.getField');
                
                action.setCallback(this, function(response) {
                    var state = response.getState();
                    if (state === "SUCCESS") {
                        component.set("v.fldVal", response.getReturnValue())
                    }
                });
                $A.enqueueAction(action);     
    }
})