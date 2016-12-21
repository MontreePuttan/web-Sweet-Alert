swal({
    title:"Ajax Request example",
    text:"Confirm Request",
    type:"info",
    showCancelButton:true,
    closeOnConfirm:false,
    showLoaderOnConfirm:true,
    
},function(){
    setTimeout(function(){
        swal("Ajax Request","DATA Complete","success");
    },2000);
});