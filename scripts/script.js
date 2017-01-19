$(document).ready(function () {

    cleanUp();

    function cleanUp() {
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

        $(".introBtn").html("Introduction");
        $(".eduBtn").html("Education");
        $(".empBtn").html("Employment");
        $(".skillsBtn").html("Skills");
        $(".portBtn").html("Porfolio");
        $(".contBtn").html("Contact");

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
            case "empBtn":
                $('#employment').fadeIn();
                $('#empBtn').addClass("active");
                break;
            case "skillsBtn":
                $('#skills').fadeIn();
                $('#skillsBtn').addClass("active");
                break;
            case "portBtn":
                $('#portfolio').fadeIn();
                $('#portBtn').addClass("active");
                break;
            case "contBtn":
                $('#contact').fadeIn();
                $('#contBtn').addClass("active");
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
            case "empBtn":
                $('#employment').fadeOut();
                $('#empBtn').removeClass("active");
                break;
            case "skillsBtn":
                $('#skills').fadeOut();
                $('#skillsBtn').removeClass("active");
                break;
            case "portBtn":
                $('#portfolio').fadeOut();
                $('#portBtn').removeClass("active");
                break;
            case "contBtn":
                $('#contact').fadeOut();
                $('#contBtn').removeClass("active");
                break;
        };
    };

    $('#introBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#introBtn').hasClass("active")) {
            $(".introBtn").html("Introduction");
            hideSection('introBtn');
        } else {
            cleanUp();
            $(".introBtn").html("{ Introduction }");
            showSection('introBtn');
        }
    });

    $('#eduBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#eduBtn').hasClass("active")) {
            $(".eduBtn").html("Education");
            hideSection('eduBtn');
        } else {
            cleanUp();
            $(".eduBtn").html("{ Education }");
            showSection('eduBtn');
        }
    });

    $('#empBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#empBtn').hasClass("active")) {
            $(".empBtn").html("Employment");
            hideSection('empBtn');
        } else {
            cleanUp();
            $(".empBtn").html("{ Employment }");
            showSection('empBtn');
        }
    });

    $('#skillsBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#skillsBtn').hasClass("active")) {
            $(".skillsBtn").html("Skills");
            hideSection('skillsBtn');
        } else {
            cleanUp();
            $(".skillsBtn").html("{ Skills }");
            showSection('skillsBtn');
        }
    });

    $('#portBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#portBtn').hasClass("active")) {
            $(".portBtn").html("Porfolio");
            hideSection('portBtn');
        } else {
            cleanUp();
            $(".portBtn").html("{ Porfolio }");
            showSection('portBtn');
        }
    });

    $('#contBtn').on('click', function (e) {
        e.preventDefault();
        if ($('#contBtn').hasClass("active")) {
            $(".contBtn").html("Contact");
            hideSection('contBtn');
        } else {
            cleanUp();
            $(".contBtn").html("{ Contact }");
            showSection('contBtn');
        }
    });



});