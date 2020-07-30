public inherited sharing class ContactController {
    @AuraEnabled
    public static List<Contact> getContacts() {
        List<Contact> contacts =
                [SELECT Id, Name, showRecord__c, Phone, Email FROM Contact];
        //Add isAccessible() check
        return contacts;
    }
    @AuraEnabled
    public static Case getCase(String CaseId) {
        list<Case> cs = [SELECT CaseNumber, Status, Subject, Description FROM Case WHERE ID=: CaseId limit 1 ];
        SObjectAccessDecision decision = Security.stripInaccessible(
	                                   AccessType.READABLE,
	                                   cs);
        //Add isAccessible() check
        Case csss = (Case)decision.getRecords()[0];
        return csss;
    }
    @AuraEnabled
    public static Double getField() {
       
        return 111222333;
    }
}