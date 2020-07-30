({
	clickMe : function(component, event, helper) {
		var address = component.find('myaddress').get('v.city');
        console.log('===================='+address);
	}
})