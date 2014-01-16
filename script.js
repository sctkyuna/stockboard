var getStock = function(company) {
	// eventually this will query the server for the price

    /*
    if (company exists)
        get stock value
        return stock
    else
        return false
    */
	return 34;
}


$(document).ready(function() {
    $("#addButton").click(function() {
        var stockID = $('input[name=stockID]').val();
        stockValue = getStock(stockID);
        if (stockValue) {
        	var stockhtml = _.template("<div class=stock id=chart_<%=stockID%>>
        									<h3><%=stockID%></h3>
        									<p><%=stockValue%></p>
        								</div>")
            $("body").append(stockhtml);
            $("#chart_" + stockID).draggable();
        }
        else {
            alert(stockID + " is not a valid stockID");
        }
    });

    $("#addButton").mouseover(function() {
        $(this).fadeTo("fast",1);
    });
    
    $("#addButton").mouseout(function() {
        $(this).fadeTo("fast",0.5); 
    });
    /*
    $(document).on("click", ".stock", function(){
        $(".stock").draggable();
    } );
    */ 

});
