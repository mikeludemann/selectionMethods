$(function () {

    var mainElement = $("#eat"),
        newSelect = $('<select></select>'),
        arr = [];

    mainElement.children().each(function () {

        var group = $(this),
            getGroup = group.attr('label'),
            option;

        option = $('<option></option>').text(getGroup);

        option.data('eat', group.children());

        if (group.find(':selected').length > 0) {

            option.prop('selected', true);

        }

        newSelect.append(option);

    });

    mainElement.before(newSelect);

    function changeUpdate() {

        var elements = newSelect.find(':selected');

        mainElement.empty().append(elements.data('eat'));

    }

    changeUpdate();

    newSelect.on('change', changeUpdate);

});