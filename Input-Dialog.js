swal({
    title: "Input your name",
    text: "Input Full name",
    type: "input",
    closeOnConfirm: false,
    animation: "slide-from-bottom",
    inputPlaceholder: "Please input data"
}, function (inputValue) {
    if (inputValue === "")
    {
        swal.showInputError("Pleasesssss input data");
        return false;
    }
    swal("Complete Form", "Insert" + inputValue + "Complete", "success");
});