public class UpdateFromLinkedIN {
	@AuraEnabled
    public static void refreshContact(String conId) {
        HttpRequest feedRequest = new HttpRequest();
        feedRequest.setEndpoint('callout:LinkedIn/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))');
        feedRequest.setMethod('GET');
        Http http = new Http();
        HTTPResponse feedResponse = http.send(feedRequest);
        System.debug('------------'+feedResponse.getBody());
        Map<String, Object> m = (Map<String, Object>)JSON.deserializeUntyped(feedResponse.getBody());
        Map<String, Object> dimFN = (Map<String, Object>)m.get('firstName');
        Map<String, Object> dimFNIN = (Map<String, Object>)dimFN.get('localized');
        Map<String, Object> dimLN = (Map<String, Object>)m.get('lastName');
        Map<String, Object> dimLNIN = (Map<String, Object>)dimLN.get('localized');
        String fName = (String)dimFNIN.get('en_US');
        String lName = (String)dimLNIN.get('en_US');
        Map<String, Object> profPic = (Map<String, Object>)m.get('profilePicture');
        Map<String, Object> disImage = (Map<String, Object>)profPic.get('displayImage~');
        List<Object> elements = (List<Object>)disImage.get('elements');
        Map<String, Object> disIdenFrs = (Map<String, Object>)elements[0];
        List<Object> identyFrs= (List<Object>)disIdenFrs.get('identifiers');
        Map<String, Object> disIdenFrsLst = (Map<String, Object>)identyFrs[0];
        String profURL = (String)disIdenFrsLst.get('identifier');
		Contact ct = new Contact(Id = conId);
        ct.FirstName = fName;
        ct.LastName = lName;
        ct.LinkedINImgURL__c = profURL;
        update ct;

    }
}