$(document).ready(function () {

    var factct = $('#factcount').val();
    var getrandomnumbers = generaterandom(factct);
    loadFact(getrandomnumbers);

    $('#factcount').change(function () {
        $("#factbox").empty();
        factct = $('#factcount').val();
        if(factct>9)
        {
            factct = 9;
        }
        getrandomnumbers = generaterandom(factct);
        loadFact(getrandomnumbers);
    });

    function generaterandom(random_count) {
        var arr = [];
        while (arr.length < random_count) {
            var r = Math.floor(Math.random() * 9) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        console.log(arr);
        return arr;
    }

    function loadFact(factcount) {
        console.log(factcount);
        $.ajax({
            url: "facts.json",
            success: function (result) {
                var strigifyresult = JSON.stringify(result);
                let obj = JSON.parse(strigifyresult);
                var arrlength = factcount.length;
                console.log("Length"+arrlength);
                for (let i = 0; i < arrlength; i++) {
                    var h1title = obj[factcount[i]]["Fact"];
                    var imgsrc = obj[factcount[i]]["img"];
                    var image_html = "<div class='col-md-4'><div class='card mb-4 box-shadow'><img class='card-img-top' data-src='holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail' alt='Thumbnail [100%x225]' style='height: 225px; width: 100%; display: block;' src='" + imgsrc + "' data-holder-rendered='true'><div class='card-body'><p class='card-text'>" + h1title + "</p></div></div></div>";
                    $("#factbox").append(image_html);
                }
            }
        });
    }
});
