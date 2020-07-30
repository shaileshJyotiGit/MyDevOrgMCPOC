public class OrderHeaderCls {
	@AuraEnabled
   Public static Order fetchOrderNo(String recId){
       		Order o = [Select OrderNumber,NoOfItems__c FROM Order WHERE ID=:recId limit 1];
           return o;
   }
    
    @AuraEnabled
   Public static list<OrderItem> fetchOrderItems(String recId){
       		list<OrderItem> oliItems = [Select Id, OrderItemNumber,Product2Id,Product2.Name,Quantity,ListPrice,UnitPrice,TotalPrice FROM OrderItem WHERE OrderID=:recId];
            return oliItems;
   }
    @AuraEnabled
    public static OrderItem deleteOrderItem(String OLIId) {
        list<OrderItem> OLIDel = [Select ID, Product2ID, Quantity FROM OrderItem WHERE ID=:OLIId];
            //new OrderItem(Id=OLIId);
        list<Product2> lstProd = [Select Available_Quantity__c FROM Product2 WHERE ID=:OLIDel[0].Product2Id];
        delete OLIDel;
        lstProd[0].Available_Quantity__c = lstProd[0].Available_Quantity__c + Integer.valueOf(OLIDel[0].Quantity);
        update lstProd;
        return OLIDel[0];
    }
    @AuraEnabled
    public static list<Product2> getProducts() {
        list<Product2> lstProd = [SELECT Name,ProductCode, Product_Image__c , DisplayUrl, Available_Quantity__c,(Select UnitPrice From PriceBookEntries WHERE PriceBook2.Name='Standard Price Book') FROM Product2];
        return lstProd;
    }
    @AuraEnabled
    public static OrderItem createOrderOli(String strProdId, String orderID, Integer quantity) {
        list<Product2> lstProd = [Select Available_Quantity__c FROM Product2 WHERE ID=:strProdId];
        Order o = new Order(Id=orderID);
        ID prodID = strProdId;
        ID orddrID = orderID;
        String extIDOne = String.valueOf(prodID) + String.valueOf(orddrID);
        if(o.Pricebook2Id == null){
        o.Pricebook2Id = [Select ID from PriceBook2 WHERE PriceBook2.Name='Standard Price Book' limit 1][0].Id;
        update o;
        }        
        PriceBookEntry pbe = [Select UnitPrice From PriceBookEntry WHERE PriceBook2.Name='Standard Price Book' AND Product2Id= :strProdId limit 1];
        list<OrderItem> OLI = [Select OLI_External_ID__c, Quantity FROM OrderItem WHERE OLI_External_ID__c=:extIDOne];
        if(OLI.size() == 0){
           OLI.add(new OrderItem(OLI_External_ID__c=extIDOne, PriceBookEntryID = pbe.Id, Product2Id = strProdId, UnitPrice=pbe.UnitPrice, Quantity=quantity, OrderID = orderID)); 
           insert OLI;
            
        }
        else{
            OLI[0].Quantity = OLI[0].Quantity + Double.valueOf(quantity);
            update OLI;
        }
        lstProd[0].Available_Quantity__c = lstProd[0].Available_Quantity__c - Integer.valueOf(quantity);
        update lstProd;
        //OrderItem OLI = new OrderItem( PriceBookEntryID = pbe.Id, Product2Id = strProdId, UnitPrice=pbe.UnitPrice, Quantity=quantity, OrderID = orderID);
        //Schema.SObjectField fldExt = OrderItem.Fields.OLI_External_ID__c;
       // database.upsert(OLI, fldExt); OLI_External_ID__c = extIDOne,
       /*************************
                Order o = new Order(Id='8016F000002vMhZQAU');//[Select Id from Order WHERE ID=:]
        if(o.Pricebook2Id == null){
        o.Pricebook2Id = [Select ID from PriceBook2 WHERE PriceBook2.Name='Standard Price Book' limit 1][0].Id;
        update o;
        }        
        PriceBookEntry pbe = [Select UnitPrice From PriceBookEntry WHERE PriceBook2.Name='Standard Price Book' AND Product2Id= '01t6F000008FGfbQAG' limit 1];
        OrderItem OLI = new OrderItem( ID='8026F000007UpqWQAS', PriceBookEntryID = pbe.Id, Product2Id = '01t6F000008FGfbQAG', UnitPrice=pbe.UnitPrice, Quantity=7, OrderID = '8016F000002vMhZQAU');
        Schema.SObjectField fldExt = OrderItem.Fields.ID;
        database.upsert(OLI, fldExt);
        
        
        ***************************/
        //insert OLI;
        return OLI[0];
    }
    
}