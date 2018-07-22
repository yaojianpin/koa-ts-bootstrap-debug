# koa-ts-bootstrap-debug
create a demo with koa, typescript, bootstrap

## for run
```
yarn install
yarn start
```
## debug in vs code
Go to debug pannel and open `launch.json`, in the `configurations` section, create the debug data as follow:
```
{
        "type": "node",
        "request": "launch",
        "name": "KOA debug",
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/ts-node-dev",
        "args": [
            "${workspaceFolder}/server.ts"
        ],
        "restart": true
  }
```
## View engine
This demo uses the [art-template](https://github.com/aui/art-template) for the view engine

## Routers
- Create seperated controller in Controller folder
  and add the static action for each router request.

    ```
    export default class HomeController {
        public static async getHome(ctx: any) {
            await ctx.render('index');
        }
    }
    ```

- Create routers file and import the controller action

```
const routers = [
    { path: '/', method: 'get', action: HomeController.getHome }
];
```

- Apply the routers to App
    ```
    const router = Router();
    routers.forEach(r => router[r.method](r.path, r.action));
    app.use(router.routes());
    app.use(router.allowedMethods());
    ```


