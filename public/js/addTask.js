$(document).ready(function () {
    $("#backBtn").click(function () {
        location.href="/tasks";
    });

    $("#taskForm").submit(function (e) {
        e.preventDefault();
        alert("Task form Sumit");
    })
});