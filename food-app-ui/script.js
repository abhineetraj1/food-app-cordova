order=[]
for (var n=0; n < item_list.length; n++){
	add_con(item_list[n]);
}

function order_n()	{
	var a = document.createElement("div");
	a.setAttribute("id", "bill");
	lp=[]
	document.body.appendChild(a);
	for (var n=0; n < order.length; n++) {
		add_bill_itm(order[n]);
	}
	if (order.length == 0) {
		document.getElementById("bill").innerHTML = "<center>-- No items selected --</center>"

	} else {
		var t = document.getElementsByClassName("bill-itm-pr");
		var pric=0;
		for (var n =0; n<t.length; n++) {
			pric = pric + parseInt((document.getElementsByClassName("bill-itm-pr")[n].innerHTML).split(" ")[1]);
		}
		document.getElementById("bill").innerHTML = document.getElementById("bill").innerHTML +'<hr><div class="bill-container"><p class="bill-itm-name">Total</p><p class="bill-itm-pr">Rs '+String(pric)+'</p></div><br>';
		lp.push(pric);
	}
	if (order.length == 0) {
		document.getElementById("bill").innerHTML = document.getElementById("bill").innerHTML + '<button class="bill-itm-pro-btn" onclick="document.getElementById('+"'"+"bill"+"'"+').remove()">Close</button>';
	}
	else {
		document.getElementById("bill").innerHTML = document.getElementById("bill").innerHTML + '<button class="bill-itm-pro-btn" onclick="document.getElementById('+"'"+"bill"+"'"+').remove()">Close</button><a href="payment.html#'+String(lp[lp.length-1])+'"><button class="bill-itm-pro-btn">Proceed</button></a>';
	}
}
//  item[k].price 
function add_bill_itm(k) {
	document.getElementById("bill").innerHTML = document.getElementById("bill").innerHTML + '<div class="bill-container"><img src="images/'+item[k].icon+'" class="bill-itm-img"><p class="bill-itm-name">'+ item[k].name +'</p><p class="bill-itm-pr">'+ item[k].price +'</p></div><br>';
}


function add_con(k) {
	document.getElementById("container").innerHTML = document.getElementById("container").innerHTML + '<div class="con"><button class="con-btn" onclick="add('+"'"+k+"'"+')">Add to cart</button><img src="images/'+item[k].icon+'" class="con-img"><p class="con-title">'+ item[k].name +'</p><p class="con-price">'+ item[k].price +'</p></div>';
}
function add(name) {
	if (document.getElementsByClassName('con-btn')[item_list.indexOf(name)].innerHTML == "Added") {
		order.splice(order.indexOf(name), 1);
		document.getElementsByClassName('con-btn')[item_list.indexOf(name)].style="color:black;background:white;"
		document.getElementsByClassName('con-btn')[item_list.indexOf(name)].innerHTML="Add to cart";
	} else {
		document.getElementsByClassName('con-btn')[item_list.indexOf(name)].style="color:white;background:black;border-color:black;"
		order.push(name);
		document.getElementsByClassName('con-btn')[item_list.indexOf(name)].innerHTML="Added";
	}
}