$(() => {
    var dec = 0;
    if (!window["def"])
        dec = 1000;

    if (window["def"])
        $(".navbar").children().each((i, e) => {
            var selected = e;
            setTimeout(() => {
                $(selected).addClass("active");
            }, i * 110 + 250);
        });
    else
        $(".navbar > *").addClass("active instant");

    setTimeout(() => {
        $("h1").each((i, e) => {
            var selected = e;
            setTimeout(() => {
                $(selected).addClass("active");
            }, i * 110);
        });
    }, 1100 - dec);

    setTimeout(() => {
        $("h2").each((i, e) => {
            var selected = e;
            setTimeout(() => {
                $(selected).addClass("active");
            }, i * 110);
        });
    }, 1100 - dec);

    setTimeout(() => {
        $("p").each((i, e) => {
            var selected = e;
            setTimeout(() => {
                $(selected).addClass("active");
            },  i * 110);
        });
    }, 1400 - dec);

    setTimeout(() => {
        $(".btn").each((i, e) => {
            var selected = e;
            setTimeout(() => {
                $(selected).addClass("active");
            }, i * 110);
        });

        $(".videoWrapper").each((i, e) => {
            var selected = e;
            setTimeout(() => {
                $(selected).addClass("active");
            }, i * 110);
        });
    }, 1600 - dec);
});