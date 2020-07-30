public class loginFLowController{
    map<String, String> mapEmailToVerCode = new map<String, String>();
    public String inputVerPin{get;set;}
    public string currUserName = '';
    public string currPIN = '';
    public loginFLowController(){
        
    }
    
     public PageReference FinishLoginFlowStartUrl() {
         if(currPIN == inputVerPin){       
            return Auth.SessionManagement.finishLoginFlow('/001');
        }
        else {
            PageReference pageRef = new PageReference('https://mypocsp-developer-edition.ap4.force.com/Error');
            return pageRef;
        }
    }   
     public pageReference pgAction(){
         currPIN = String.valueOf(Integer.ValueOf(math.random()*10000));
         Map<String,String> sessionAttributes = Auth.SessionManagement.getCurrentSession();
         currUserName = sessionAttributes.get('Username');
         User u = [Select email from User where UserName=:currUserName limit 1];
         sendEmailTest(u.email,currPIN);
         mapEmailToVerCode.put(currUserName, currPIN);
         system.debug('**************************************'+currPIN);
         return null;
     
     }
     public string sendEmailTest(String email, String pin){
            Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
            message.toAddresses = new String[] { email };
            message.optOutPolicy = 'FILTER';
            message.subject = 'Your Pin for Login '+pin;
            message.plainTextBody = 'Mastercard Auth';
            Messaging.SingleEmailMessage[] messages =   new List<Messaging.SingleEmailMessage> {message};
            Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);
            
            if (results[0].success) 
            {
                return 'The email was sent successfully.';
            } else 
            {
                return 'The email failed to send: ' + results[0].errors[0].message;
            }
     
     } 
}