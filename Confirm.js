swal({
    title:"Alert Confirm",
    text:"Are you sure",
    type:"success",
    showCancelButton:true,
    confirmButtonColor:"#DD6B55",
    confirmButtonText:"Confirm",
    closeOnConfirm:false
},
function(){
    swal("Complete","Close Complete","success")
})