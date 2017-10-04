'use strict';

/**
 * Mean, Median, Mode
 */
module.exports = function(numbers, operation) {
    if (!Array.isArray(numbers)) {
        console.log("Oops! First parameter is expected to be an array of numbers");
        return null;
    }
    if (operation == 'median') {
        var median = 0, numsLen = numbers.length;
        numbers.sort();

        if (numbers.length % 2 == 0) {
            median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
        } else {
            median = numbers[(numsLen - 1) / 2];
        }

        return median;
    } else if (operation == 'mean') {
        var total = 0, mean, i;
        for(i=0; i<numbers.length; i++) {
            total = total + numbers[i];
        }

        mean = total/numbers.length;

        return mean;
    } else if (operation == 'mode') {
        var modes = [], count = [], i, number, maxIndex = 0;

        for (i = 0; i < numbers.length; i += 1) {
            number = numbers[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (i in count) {
            if (count.hasOwnProperty(i)) {
                if (count[i] === maxIndex) {
                    modes.push(Number(i));
                }
            }
        }

        return modes;
    } else {
        console.log("Oops! Expected 2nd param to be one of the following: 'mean', 'median', 'mode'");
        return null;
    }
};

