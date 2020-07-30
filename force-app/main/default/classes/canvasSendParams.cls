public class canvasSendParams {
    @AuraEnabled
    public Static String sendOpportunityDetails(Id opportunityID){
        list<Opportunity> oppList = [Select Id, Name from Opportunity Where ID=:opportunityID];
        String oppName = oppList[0].Name;
        String jsonOutPut = JSON.serialize(oppList);
        return jsonOutPut;
    }
}