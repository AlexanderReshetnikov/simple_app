import $ from 'jQuery';

$(document).ready(() => {
    $('#title').text('hello, jQuery');
    $('li a').text('tag li');

    const square = $('#square');
    const btnSquare = $('#btn-square');
    btnSquare.click(() => {
        square.toggleClass('square-soft');
    })

    square.mouseenter(function () {
        $(this).css({
            'background-color' : 'black',
            'border-radius': '40px'
        })
        btnSquare.css({
            'width': '200px'
        })
    })
    square.mouseleave(
        function () {
            $(this).css({
                'background-color' : 'blueviolet',
                'border-radius': '0px'
            })
            btnSquare.css({
                'width': 'initial'
            })
        }
    )

})