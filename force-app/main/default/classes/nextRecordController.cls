public class nextRecordController {
        
    @AuraEnabled
    public static String getNextCaseId(Id prevCaseId, String nextOrPrev) {
        /*do{
        list<Case> lstCases = [Select CaseNumber From Case Where Id=:prevCaseId limit 1];
        String existingCaseNum = lstCases[0].CaseNumber;
        Integer caseNumIntNext = Integer.valueOf(existingCaseNum);
        }
        while();*/
        //map<Date, Id> mapCaseToRet = new map<Date,Id>();
        list<Id> lstCaseIds = new list<Id>();
        for(Case c : [Select Id, Custom_Date__c From Case WHERE isClosed=false AND SkipNext__c = false Order By Custom_Date__c ASC]){
            //mapCaseToRet.put(c.Custom_Date__c, c.Id);
            lstCaseIds.add(c.Id);
        }
        //lstCaseIds = mapCaseToRet.values();
        //system.debug(lstCaseIds.get(lstCaseIds.indexOf(prevCaseId)+1)+'----------'+lstCaseIds);
        String nextRecId = (nextOrPrev == 'Next')?lstCaseIds.get(lstCaseIds.indexOf(prevCaseId)+1):lstCaseIds.get(lstCaseIds.indexOf(prevCaseId)-1);
        system.debug('*********'+nextRecId);
        return nextRecId;
    }
    
 }