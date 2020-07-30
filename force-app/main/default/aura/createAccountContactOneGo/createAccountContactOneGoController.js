({
    doInit : function(component, event, helper) {  
        var deflist1 = component.get("v.masterCardTeam");        
        deflist1.push({'sobjectType': 'Contact','LastName': '', 'AccountId':''});
        component.set("v.masterCardTeam",deflist1); 
    },
    addCriterion1 : function(component, event, helper) { 
        console.log('******************444444444444*****************'+JSON.stringify(event));
        //var index = event.currentTarget.dataset.index;
        var deflist = component.get("v.masterCardTeam"); 
        
        deflist.push({'sobjectType': 'Contact','LastName': ''});
        component.set("v.masterCardTeam",deflist); 
        //console.log('*********************'+JSON.stringify(component.get("v.masterCardTeam")));
        event.preventDefault();
    },
    deleteCriterion1 : function(component, event, helper) {  
        
        var index = event.currentTarget.dataset.index;
        var lifeEventList   = component.get('v.masterCardTeam');   
        lifeEventList.splice(index, 1);
        component.set('v.masterCardTeam',lifeEventList);
        console.log('*********************'+JSON.stringify(component.get("v.masterCardTeam")));
    }
})