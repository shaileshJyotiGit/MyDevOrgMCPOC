public class oppModalCtrl{
    private final Opportunity acct;
    public boolean displayPopup {get;set;} 
    public oppModalCtrl(ApexPages.StandardController stdController) {
        stdController.addFields(new list<String>{'Feedback_Sent__c', 'StageName'});
        this.acct = (Opportunity)stdController.getRecord();       
        if((!acct.Feedback_Sent__c) && (acct.StageName == 'Closed Won'))
            displayPopup = true;
    }
    
    public void closePopup(){
     acct.Feedback_Sent__c = true;
     update acct;
     displayPopup = false; 
    }

}