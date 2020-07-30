<aura:application extends="force:slds" controller="ContactListController">
    
    <!-- All items added to the list -->
    <aura:attribute name="data" type="List" />
    <aura:handler name="init" action="{!c.getContactsList}" value="{!this}" />
    <!-- The list of currently viewable items -->
    <aura:attribute name="filteredData" type="List" />
    <!-- Input for a new item -->
    <aura:attribute name="newItem" type="String" />  
    <!-- Input for the filter text -->
    <aura:attribute name="filter" type="String" />
    
    <!-- Real time filtering based on changes to the filter text
    <aura:handler name="change" value="{!v.filter}" action="{!c.updateFilter}" />  -->
    <!-- Filter input -->
    <lightning:input name="x" value="{!v.filter}" label="Filter" />
    <hr />
    <!-- List of all items when filter = "", or case insensitive match otherwise -->
    <aura:iteration items="{!v.data}" var="row" indexVar="rowIndex">
        <lightning:input disabled="{!true}" name="x" value="{!row.Name}"  />
    </aura:iteration>
</aura:application>