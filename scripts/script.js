$(document).ready(function () {

    hideAll();

    function hideAll() {
        $('#introduction').hide();
        console.log("hello");
        $('#education').hide();
        $('#employment').hide();
        $('#skills').hide();
        $('#portfolio').hide();
        $('#contact').hide();

        $('#introBtn').removeClass('active');
        $('#eduBtn').removeClass('active');
        $('#empBtn').removeClass('active');
        $('#skillsBtn').removeClass('active');
        $('#portBtn').removeClass('active');
        $('#contBtn').removeClass('active');
    };

    function showSection(idClicked) {
        switch (idClicked) {
            case "introBtn":
                $('#introduction').fadeIn();
                $('#introBtn').addClass("active");
                break;
            case "eduBtn":
                $('#education').fadeIn();
                $('#eduBtn').addClass("active");
                break;
        };
    };

    function hideSection(idClicked) {
        switch (idClicked) {
            case "introBtn":
                $('#introduction').fadeOut();
                $('#introBtn').removeClass("active");
                break;
            case "eduBtn":
                $('#education').fadeOut();
                $('#eduBtn').removeClass("active");
                break;
        };
    };

    $('#introBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#introBtn').hasClass("active")) {
            hideSection('introBtn');
        } else {
            hideAll();
            showSection('introBtn');
        }
    });

    $('#eduBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#eduBtn').hasClass("active")) {
            hideSection('eduBtn');
        } else {
            hideAll();
            showSection('eduBtn');
        }
    });

    $('#empBtn').on('click', function () {
        hideAll();
        toggleSection('empBtn');
    });
    $('#skillsBtn').on('click', function () {
        hideAll();
        toggleSection('skillsBtn');
    });
    $('#portBtn').on('click', function () {
        hideAll();
        toggleSection('portBtn');
    });
    $('#contBtn').on('click', function () {
        hideAll();
        toggleSection('contBtn');
    });

});