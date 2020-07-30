global class BatchTest implements Database.Batchable<sObject>{
	global final String Query;
    global BatchTest(String q){
        Query = q;
   }
   global Database.QueryLocator start(Database.BatchableContext BC){
      return Database.getQueryLocator(query);
   }

   global void execute(Database.BatchableContext BC, List<sObject> scope){
     for(sobject s : scope){
     System.debug('========'+s);
    }
   }
   global void finish(Database.BatchableContext BC){
       //getAccount();
   }
   @future
    public static void getAccount(){
        Account acc = [Select ID From Account LIMIT 1];
    }

}