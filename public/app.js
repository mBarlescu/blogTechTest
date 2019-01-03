function IsEmpty(){
  if(document.forms['frm'].title.value === "" || parseInt(document.forms['frm'].title.value.length) > 255 )
  {
    alert("title cannot be empty or over 255 characters");
    return false;
  }
    return true;
}

