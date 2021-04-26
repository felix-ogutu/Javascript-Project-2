function validateForm(){
    const x=document.forms["forms"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;

    }
}