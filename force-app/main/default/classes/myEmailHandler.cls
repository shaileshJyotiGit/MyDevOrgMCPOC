global class myEmailHandler implements Messaging.InboundEmailHandler {
      global Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, Messaging.InboundEnvelope envelope) {
          Messaging.InboundEmailResult result = new Messaging.InboundEmailresult();
          system.debug('oooooooooooooo result ooooooooooooooo'+result);
          system.debug('============== email ==============='+email);
          system.debug('###############envelope##############'+envelope);
          String emailBody = email.htmlBody != null? email.htmlBody:email.plainTextBody;
          String contactFirstName = emailBody.substringBetween('FName=', '*');
          String contactLastName = emailBody.substringBetween('LName', '*');
          String contactPhone = emailBody.subStringBetween('Cphone','*');
          Contact ct = new contact(FirstName= contactFirstName.trim(), LastName= contactLastName.trim(), Phone= contactPhone.trim());
          insert ct;
          return result;
      }
      
  }