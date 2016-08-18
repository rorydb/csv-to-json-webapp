function submitForm(e) {
    e.preventDefault();
    const form = $(this);

    let dest = form.attr("action");
    let method = form.attr("method");
    let data = form.serialize();

    $.ajax({
        url: dest,
        method: method,
        data: data,

        success: function(data) {
            $("#result code").text(data);
        },
        failure: function() {
            console.log("something went wrong");
        }
    })
}

function submitFile(e) {
    e.preventDefault();
    const form = $(this);

    let dest = form.attr("action");
    let method = form.attr("method");
    let data = new FormData();

    data.append("csv", document.getElementById('csv-file').files[0]);

    $.ajax({
        url: dest,
        method: method,
        data: data,
        contentType: false,
        processData: false,
        success: function(data) {
            $("#result code").text(data);
        },
        failure: function() {
            console.log("something went wrong");
        }
    });
}

$(document).ready( function() {
    $('form#plain-text, form#remote').submit(submitForm);
    $('form#file-upload').submit(submitFile);
});