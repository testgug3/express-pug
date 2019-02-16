'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "isAdmin" to table "Users"
 *
 **/

var info = {
    "revision": 2,
    "name": "addedColumnIsAdminUser",
    "created": "2019-02-16T17:23:08.931Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "Users",
        "isAdmin",
        {
            "type": Sequelize.BOOLEAN,
            "field": "isAdmin",
            "allowNull": true
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
