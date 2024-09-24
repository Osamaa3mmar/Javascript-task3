var form=document.querySelector(".form-container");
var nameInput=document.querySelector(".name");
var priceInput=document.querySelector(".price");
var descriptionInput=document.querySelector(".description");
var cancleBtn=document.querySelector(".cancel-btn");
var tableBody=document.querySelector(".table-body");



var products=[];
var tempProduct={};


function reloadTable(){
if(products.length==0){
    tableBody.innerHTML=`<h2>No element</h2>`;
}
else{
    
    var content="";
    for(var i=0;i<products.length;i++){
        content+=
        `<tr>
            <td>${products[i].name}</td>
            <td>${products[i].price}</td>
            <td>${products[i].description}</td>
</tr>`;
    }
    
    tableBody.innerHTML=content;
}
};

function makeObjectAndAddToArray(name,price,description){
    tempProduct={
        name:name,
        price:price,
        description:description,
    }
    products.push(tempProduct);
    console.log(products[0]);
    tempProduct={};
    reloadTable();
};



form.onsubmit=function(e){
    e.preventDefault();
    if(nameInput.value===""||priceInput.value===""||descriptionInput.value===""){
        alert("dont miss any data !");
    }
    else{
    makeObjectAndAddToArray(nameInput.value,priceInput.value,descriptionInput.value);
   
    clearInputs();
    }
    
};

function clearInputs(){
    nameInput.value="";
    priceInput.value="";
    descriptionInput.value="";
    toggleForm();
}

function toggleForm(){
    form.classList.toggle("hide");
}

document.querySelector(".open-form").onclick=toggleForm;
cancleBtn.onclick=clearInputs;


reloadTable();