'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Leads", deps: []
 * createTable "Users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "noname",
    "created": "2019-02-16T09:40:33.030Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Leads",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false,
                    "defaultValue": Sequelize.UUIDV4
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.UUID,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false,
                    "defaultValue": Sequelize.UUIDV4
                },
                "username": {
                    "type": Sequelize.STRING,
                    "field": "username",
                    "allowNull": true
                },
                "firstname": {
                    "type": Sequelize.STRING,
                    "field": "firstname",
                    "allowNull": true
                },
                "lastName": {
                    "type": Sequelize.STRING,
                    "field": "lastName",
                    "allowNull": true
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password",
                    "allowNull": true
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "unique": true,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

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
