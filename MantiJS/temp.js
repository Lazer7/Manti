        titles='anime';
        var jsonfile = require('jsonfile')
        var file = '../MantiHTML/Category.json'
        jsonfile.writeFile(file, titles, function (err) {
        console.error(err)});