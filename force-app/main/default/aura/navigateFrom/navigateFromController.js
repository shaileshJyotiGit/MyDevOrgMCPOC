({
    init : function(component, event, helper)  {
        component.find("nav").navigate({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: "MyAccounts"
            }
        });
    },
});