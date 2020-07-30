public class myTestCtrl{
    
    public list<Contact> lstCOns{get;set;}
    
    public myTestCtrl(){
        String getCode = ApexPages.currentPage().getParameters().get('code');
        system.debug('========='+getCode);
        getAllTheCons();
    }
    public void getAllTheCons(){
        lstCOns = new list<Contact>();
        lstCOns = [Select FirstName, LastName, Email, Phone From Contact limit 10];   
    }



}