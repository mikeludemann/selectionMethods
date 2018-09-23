var stepNumbers = {
    '1': {
        '1.1': [
            '1.1.1', '1.1.2', '1.1.3'
        ],
        '1.2': [
            '1.2.1', '1.2.2', '1.2.3'
        ],
        '1.3': [
            '1.3.1', '1.3.2', '1.3.3'
        ]
    },
    '2': {
        '2.1': [
            '2.1.1', '2.1.2', '2.1.3'
        ],
        '2.2': [
            '2.2.1', '2.2.2', '2.2.3'
        ],
        '2.3': [
            '2.3.1', '2.3.2', '2.3.3'
        ]
    },
    '3': {
        '3.1': [
            '3.1.1', '3.1.2', '3.1.3'
        ],
        '3.2': [
            '3.2.1', '3.2.2', '3.2.3'
        ],
        '3.3': [
            '3.3.1', '3.3.2', '3.3.3'
        ]
    }
}

function creatingNewOption(datalist, text, value) {

    var opt = document.createElement('option');
    opt.value = value;
    opt.text = text;
    datalist.options.add(opt);

}

function creatingNewOptions(arrayOptions, datalist) {

    for (i = 0; i < arrayOptions.length; i++) {

        creatingNewOption(datalist, arrayOptions[i], arrayOptions[i]);

    }

}

function updatingSecondSelect(datalistOne, datalistTwo, datalistThree) {

    datalistTwo.options.length = 0;
    datalistThree.options.length = 0;

    creatingNewOption(datalistTwo, "Select Second Option", "");

    var datalistTwokeys = Object.keys(stepNumbers[datalistOne.value]);
    
    creatingNewOptions(datalistTwokeys, datalistTwo)

}

function updatingThirdSelect(datalistOne, datalistTwo, datalistThree) {

    datalistThree.options.length = 0;

    creatingNewOption(datalistThree, "Select Third Option", "");

    var datalistThreekeys = stepNumbers[datalistOne.value][datalistTwo.value];

    creatingNewOptions(datalistThreekeys, datalistThree);

}