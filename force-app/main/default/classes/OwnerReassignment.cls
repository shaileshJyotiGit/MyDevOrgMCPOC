global class OwnerReassignment implements Database.Batchable<sObject>{
    Public String query{get;set;}
    Public Id toUserId{get;set;}
    Public Id fromUserId{get;set;}
    
    global Database.querylocator start(Database.BatchableContext BC){
                return Database.getQueryLocator(query);}
    
    global void execute(Database.BatchableContext BC, List<sObject> scope){
        List<Account> accns = new List<Account>();
    
       for(sObject s : scope){Account a = (Account)s;
            if(a.OwnerId==fromUserId){
                a.OwnerId=toUserId;
                accns.add(a);
                }
            }
    
    update accns;
        
    }
    global void finish(Database.BatchableContext BC){
    
    }
}