swal({
    title:"Alert Confirm",
    text:"Are you sure",
    type:"success",
    showCancelButton:true,
    confirmButtonColor:"#DD6B55",
    confirmButtonText:"Confirm",
    closeOnConfirm:false,
    closeOnCancel:false
},
function(isConfirm){
    if(isConfirm)
    {
        swal("Complete","Close Complete","success")
    }else{
        swal("Cancel","Error Message","warning")
    }
    
})