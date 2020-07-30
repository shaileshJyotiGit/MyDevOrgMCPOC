({
    
    //The method to get the Open and Closed Case data from the Apex Controller
    getData : function(cmp) {        
        var action = cmp.get('c.getProducts');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                if(response.getReturnValue() != '' || response.getReturnValue() != null){
                try {
                    cmp.set('v.productList', response.getReturnValue());
                /*var rows = response.getReturnValue();
                
                for(var i=0;i<rows.length; i++){
            			var row = rows[i];
                    	console.log('================'+JSON.stringify(row));
                        if(row.Product2) 
                            row.Product2 = row.Product2.Name;
        			}*/
                }
                    catch(err){
    					console.error(err);
					}
                }
                /*END OF EVENT FIRE*/
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
        
    },
    //Sort utility for the datatable sorting functionality
    sortData: function (component, fieldName, sortDirection) {
        var data = component.get("v.productList");
        var reverse = sortDirection !== 'asc';
        //sorts the rows based on the column header that's clicked
        data.sort(this.sortBy(fieldName, reverse))
        component.set("v.productList", data);
    },
    //Sort utility for the datatable sorting functionality
    sortBy: function (field, reverse, primer) {
        var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]};
        //checks if the two rows should switch places
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    },
    deleteRow: function(cmp, row) {
      var action = cmp.get("c.deleteOrderItem");
        action.setParams({
            "OLIId":row.Id
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var rows = cmp.get('v.productList');
                var rowIndex = rows.indexOf(row);
                rows.splice(rowIndex, 1);
                cmp.set('v.productList', rows);
            }
            else if (state === "ERROR") {
                // handle error
            }
        });
        $A.enqueueAction(action);
    }
})