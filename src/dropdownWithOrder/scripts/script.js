function updateChange(mainSelect, updateSelectOne, updateSelectTwo) {

    var options;

    if (mainSelect.value != '0') {

        updateSelectOne = mainSelect.form[updateSelectOne];

        options = updateSelectOne.options;

        for (var i = 0; i < options.length; i++) {

            if (options[i].value == '0') {

                updateSelectOne.selectedIndex = i;

                break;

            }

        }

        if (updateSelectTwo != '') {

            updateSelectOne = mainSelect.form[updateSelectTwo];

            options = updateSelectOne.options;

            for (var i = 0; i < options.length; i++) {

                if (options[i].value == '0') {

                    updateSelectOne.selectedIndex = i;

                    break;

                }

            }

        }

    }

}