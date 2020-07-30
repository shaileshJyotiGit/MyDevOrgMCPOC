public class ContactListController {
        
    @AuraEnabled
    public static List<Contact> getContactList() {
        // Getting the list of contacts from where Id is in accountIds
                List<Contact> contactList = [SELECT Id, Name, Email, Phone, AccountId FROM Contact];
                // Returning the contact list
        return contactList;
    }
    
    @AuraEnabled
    public static List<ESF_Classification__c> getESFList() {
        // Getting the list of contacts from where Id is in accountIds
                List<ESF_Classification__c> ESFList = [SELECT ID, ESF_Function__c, ESF_Function_Number__c, ESF_Program__c, ESF_Program_Number__c, 
                												ESF_Service__c, ESF_Service_Number__c, ESF_Strategic_Objective__c 
                							 		   FROM ESF_Classification__c limit 20];
                // Returning the contact list 
        return ESFList;
    }
}