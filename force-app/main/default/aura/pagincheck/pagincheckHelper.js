({
    /*
     * Initially this Method will be called and will fetch the records from the Salesforce Org 
     * Then we will hold all the records into the attribute of Lightning Component
     */
	doFetchContact : function(component) {
		var action = component.get('c.showContacts');
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS' && component.isValid()){
                // hold all the records into an attribute named "ContactData"
                component.set('v.ContactData', response.getReturnValue());
                // get size of all the records and then hold into an attribute "totalRecords"
                // set star as 0
            }else{
                alert('ERROR');
            }
        });
        $A.enqueueAction(action);
	}
})