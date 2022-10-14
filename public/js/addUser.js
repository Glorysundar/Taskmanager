$(document).ready(function () {
    $("#backBtn").click(function () {
        location.href = "/users";
    });

    $("#userForm").submit(function (e) {
        e.preventDefault();
        alert("User form Sumit");
    })
});