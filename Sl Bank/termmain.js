var inc=0;
function countcheck(){
	inc=inc+1;
	if (inc==1){
	alert("Congratulation User");
}
	if(inc==3){
	alert("Discount offer of 20% on all products");
}
	if(inc==5){
	alert("Hurray!! Mega Offers of 50% on all products.");
}
}
function validateName(){
	var x=document.getElementById("name").value;
	if(x.length<3){
		alert("Please enter valid Product Name");
		return 0;
	}
	return 1;
}

var gList=[];
var count=0;
var i;

function createObject()
{
	if(validateName()==true){
    	  alert("Product Added!");
	var E=new grocery(document.getElementById("name").value,document.getElementById("price").value,document.getElementById("cname").value,document.getElementById("dprice").value,document.getElementById("rno").value);
	gList[count]=E;
	count=count+1;
}
}

var grocery=function(name,price,cat,dprice,rack){
	this.name=name;
	this.price=price;
	this.cat=cat;
	this.dprice=dprice;
	this.rack=rack;
}



function displaylist() {

	if(i<=count)
	{
document.getElementById("demo").innerHTML=gList[i].name;     
document.getElementById("demo3").innerHTML=gList[i].price;    
document.getElementById("demo4").innerHTML=gList[i].dprice;
document.getElementById("demo5").innerHTML=gList[i].cat;
document.getElementById("demo6").innerHTML=gList[i].rack;   
i=i+1; 
	}
	else
	{
		i=0;
	}
}

function validate()
{
    if(   document.getElementById("user").value == "abc"
       && document.getElementById("pass").value == "123" )
    {
        alert( "Validation Succeeded!" );
        location.href = "main.html";

    }
    else
    {
        alert( "Validation Failed!" );
        location.href="index.html";
    }
}

function addemp()
{
    	  alert("Are You Sure?");
          location.href = "form.html";

}

function displayprice()
{
	var j;
	var flag=0;
	var str=document.getElementById("ename").value;
	for(j=0;j<count;j++){
		if(gList[j].name==str){
			flag=1;
			document.getElementById("demo7").innerHTML=gList[j].price;
			document.getElementById("demo8").innerHTML=gList[j].dprice;
		}
	}
	if(flag==0){
	alert("Product Not Found!");
	}
}

function displaycat()
{
	var k;
	var flag=0;
	var str=document.getElementById("ename2").value;
	for( k=0;k<count;k++){
		if(gList[k].name==str){
			flag=1;
			document.getElementById("demo10").innerHTML=gList[k].cat;
		}
	}
	if(flag==0){
	alert("Product Not Found!");
	}
}

function displayloc()
{
	var t;
	var flag=0;
	var str=document.getElementById("mname").value;
	for(t=0;t<count;t++){
		if(gList[t].name==str){
			flag=1;
			document.getElementById("demo12").innerHTML=gList[t].rack;
		}
	}
	if(flag==0){
	alert("Product Not Found!");
	}
	
}

function undercat()
{
	var h;
	var count2=0;
	var flag=0;
	var str=document.getElementById("mname2").value;
	for(h=0;h<count;h++){
		if(gList[h].cat==str){
			flag=1;
			count2=(count2*1+1*1);
		}
	}
	document.getElementById("demo14").innerHTML=count2;
	if(flag==0){
	alert("Product Not Found!");
	}
	
}

function percdisc()
{
	var h;
	var disc=0;
	var flag=0;
	var str=document.getElementById("mname3").value;
	for(h=0;h<count;h++){
		if(gList[h].name==str){
			flag=1;
			disc=((gList[h].price-gList[h].dprice)/(gList[h].price))*100;
		}
	}
  	document.getElementById("demo18").innerHTML=disc;
	if(flag==0){
	alert("Product Not Found!");
	}
	
}

function billtotal()
{
	var h;
	var ap;
	var dp;
	var disc=0;
	var flag=0;
	var str=document.getElementById("mname4").value;
	var quant=document.getElementById("mname5").value;
	var nm=document.getElementById("mname6").value;
	
	for(h=0;h<count;h++){
		if(gList[h].name==str){
			flag=1;
			ap=gList[h].price*quant;
			dp=gList[h].dprice*quant;
			disc=((gList[h].price-gList[h].dprice)/(gList[h].price))*100;
		}
	}
	document.getElementById("demo22").innerHTML=nm;
	document.getElementById("demo19").innerHTML=ap;
	document.getElementById("demo20").innerHTML=dp;
  	document.getElementById("demo21").innerHTML=disc;
	if(flag==0){
	alert("Product Not Found!");
	}
	
}
