function isEmpty(){
  if(document.forms['frm'].title.value === "" || parseInt(document.forms['frm'].title.value.length) > 255 )
  {
    alert("title cannot be empty or over 255 characters");
    return false;
  } else if (
      parseInt(document.forms['frm'].description.value.length) < 3 && parseInt(document.forms['frm'].description.value.length) !== 0  || parseInt(document.forms['frm'].description.value.length) > 1000 )
  {
    alert("description cannot be less than 3 characters (but can be empty) or over 1000 characters");
    return false;
  }

    return true;
}

// function isEmptyDescription(){
//   if(parseInt(document.forms['frm'].description.value.length) < 3 && parseInt(document.forms['frm'].description.value.length) !== 0  || parseInt(document.forms['frm'].description.value.length) > 1000 )
//   {
//     alert("description cannot be less than 3 characters (but can be empty) or over 1000 characters");
//     return false;
//   }
//     return true;
// }
