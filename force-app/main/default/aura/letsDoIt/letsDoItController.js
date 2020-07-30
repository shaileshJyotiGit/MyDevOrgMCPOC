({
    getContactsList: function(component, event, helper) {
        // Fetch the account list from the Apex controller
        helper.getConList(component);
      },
    // Fired when the filter changes
    updateFilter: function(component, event, helper) {
        helper.updateFilter(component);
    }
})