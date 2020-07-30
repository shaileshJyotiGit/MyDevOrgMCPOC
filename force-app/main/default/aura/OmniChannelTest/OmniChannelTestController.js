({
    onStatusChanged : function(component, event, helper) {
        console.log("Status changed."+JSON.stringify(event));
        var statusId = event.getParam('statusId');
        var channels = event.getParam('channels');
        var statusName = event.getParam('statusName');
        var statusApiName = event.getParam('statusApiName');
        console.log(statusId);
        console.log(channels);
        console.log(statusName);
        console.log(statusApiName);
         var utilityAPI = component.find("utilitybar");
             utilityAPI.getAllUtilityInfo().then(function(response) {
                console.log('*****************'+JSON.stringify(response));
                alert('You have an incoming chat!!'); 
                var myUtilityInfo = response[0];
                utilityAPI.openUtility({
                    utilityId: myUtilityInfo.id
                });
       		})
        .catch(function(error) {
            console.log(error);
        });
    }, 
})