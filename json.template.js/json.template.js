/**
 * Copyright (C) 2015 Artem Los, All rights reserved.
*/


/**
 * Inserts JSON values stored in a Dictionary into a string (template). <br/>
 * The format of the key in the template is "[key]", which will be replaced <br/>
 * by a corresponding key in the json dictionary. NOTE: If the json string is in raw format, please use InsertVariablesIntoText instead.
 * @param {json} The json object (already parsed with JSON.parse) that contains a serialized version of a dictionary/hashmap.
 * @param {input} "template">The string that contains the short keywords "[key]" that are to be replaced by the onces in the json dictionary.
 * @return {string} with all values pre-filled.
*/
function InsertVariablesIntoTextJSON(json, input) {
    var output = input;

    for (key in json) {
        output = output.replace("[" + key + "]", "<strong>"+ json[key]+ "</strong>");
    }

    return output;
}

/**
 * Inserts JSON values stored in a Dictionary into a string (template). <br/>
 * The format of the key in the template is "[key]", which will be replaced <br/>
 * by a corresponding key in the json dictionary. NOTE: If the json string is in raw format, please use InsertVariablesIntoText instead.
 * @param {json} The json object that contains a serialized version of a dictionary/hashmap. It has to have a parrent element.
 * @param {input} "template">The string that contains the short keywords "[key]" that are to be replaced by the onces in the json dictionary.
 * @return {string} with all values pre-filled.
*/
function MultipleJSONArrays(json, input, parrent) {

    var obj = json[parrent]; //JSON.parse(json)[parrent];

    var output = input;

    for (key in obj) {
        output = InsertVariablesIntoTextJSON(obj[key], output);
    }

    return output;

}
