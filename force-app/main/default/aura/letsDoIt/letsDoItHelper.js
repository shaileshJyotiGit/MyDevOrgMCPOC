({
    getConList:function(component){
    	var action = component.get("c.getESFList");
        // Set up the callback
        var self = this;
        action.setCallback(this, function(actionResult) {
         component.set("v.data", actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    
    // Apply filter to the list of all items
    updateFilter: function(component) {
        var data = component.get("v.data"),
            term = component.get("v.filter"),
            newdata = data.filter(word => (!term) || word.toLowerCase().indexOf(term.toLowerCase()) > -1);
        component.set("v.filteredData", newdata);
    }
})