# koa-ts-bootstrap-debug
create a demo with koa, typescript, bootstrap

## for run
> yarn install
  yarn start

## debug in vs code
Go to debug pannel and open `launch.json`, in the `configurations` section, create the debug data as follow:
>  {
        "type": "node",
        "request": "launch",
        "name": "KOA debug",
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/ts-node-dev",
        "args": [
            "${workspaceFolder}/server.ts"
        ],
        "restart": true
  }


This demo uses the [art-template](https://github.com/aui/art-template) for the view engine


