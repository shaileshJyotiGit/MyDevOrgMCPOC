public class PaginationController { 
    public static boolean executedFromAura = false;
    @AuraEnabled(cacheable=true)
    public static List<Contact> showContacts(){
        List<Contact> contactList = new List<Contact>();
        contactList = [Select Id, Name, Title, Email, MobilePhone, Fax, AccountId From Contact LIMIT 100 ];
        return contactList;
    }
    
    @AuraEnabled
    public static void createAccount(String accName){
        executedFromAura = true;
        Account acc = new Account(Name=accName);
        insert acc;
        
    }
}