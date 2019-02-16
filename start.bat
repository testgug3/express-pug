if %NODE_ENV%=='development'
(nodemon ./bin/www fi)
else
(node ./bin/www) 