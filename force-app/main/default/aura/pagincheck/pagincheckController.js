({
    doInit: function (component, event, helper) {
        // Set the columns of the Table 
        component.set('v.isSending',true);
        component.set('v.columns', [
            {label: 'Contact Name', fieldName: 'Name', type: 'text', sortable : true},
            {label: 'Title', fieldName: 'Title', type: 'text', sortable : true},
            {label: 'Email', fieldName: 'Email', type: 'email', sortable : true},
            {label: 'Mobile Phone', fieldName: 'MobilePhone', type: 'phone', sortable : true},
        ]);
            helper.doFetchContact(component);
      /*****************EMPAPI CODE*****************/
        // Get the empApi component.
        var empApi = component.find("empApi");
        // Get the channel from the input box.
        var channel = '/data/ContactChangeEvent';
        var sObjectName = 'Contact';        
        var replayId = '-1';
        
        // Callback function to be passed in the subscribe call.
        // After an event is received, this callback prints the event
        // payload to the console.
        var callback = function (message) {            
            var modifiedRecords = message.data.payload.ChangeEventHeader.recordIds;
            var commitUser = message.data.payload.ChangeEventHeader.commitUser;
            console.log('*****************************************'+modifiedRecords);
            //var currentRecordId = component.get('v.recordId');
            var userId = $A.get("$SObjectType.CurrentUser.Id")
			var whattyp = message.data.payload.ChangeEventHeader.changeType;
           // if (modifiedRecords.includes(currentRecordId) && commitUser != userId) {
			var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "message": "New Contact Has Been Added. List refreshed.",
                    "type": "warning",
                    "mode": "sticky"
                });
                toastEvent.fire();
                
            
           /* if(whattyp == 'CREATE'){
            	$A.get('e.force:refreshView').fire();            	
            }*/
            
           // }
        }.bind(this);

        // Error handler function that prints the error to the console.
        var errorHandler = function (message) {
            console.log("Received error ", message);
        }.bind(this);

        // Register error listener and pass in the error handler function.
        empApi.onError(errorHandler);

        // Subscribe to the channel and save the returned subscription object.
        empApi.subscribe(channel, replayId, callback).then(function(value) {
            console.log("Subscribed to channel " + channel);
        });
     /*******************END****************/
            /******* Start Creating Dynamic Component 
             $A.createComponent(
            "lightning:datatable",
            {
                "aura:id": "myTable",
            "keyField":"id",
                "data": component.get("v.ContactData"),
                "columns": "[{label: 'Contact Name', fieldName: 'Name', type: 'text', sortable : true},"+
            "{label: 'Title', fieldName: 'Title', type: 'text', sortable : true},{label: 'Email', fieldName: 'Email', type: 'email', sortable : true},"+
            "{label: 'Mobile Phone', fieldName: 'MobilePhone', type: 'phone', sortable : true}]"
            },
            function(newButton, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var body = component.get("v.body");
                    body.push(newButton);
                    component.set("v.body", body);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
            
           END Dynamic *****/
    },
    checkRowAct: function(component, event, helper){
          component.find('notifLib').showNotice({
            "variant": "error",
            "header": "Something has gone wrong!",
            "message": "Unfortunately! \n there was a problem updating the record.",
            closeCallback: function() {
                alert('You closed the alert!');
            }
        });
            
    }
})