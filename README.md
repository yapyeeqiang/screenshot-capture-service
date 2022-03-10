# Getting Started with Screenshot Capture API

1. Start by installing the dependencies.

```bash
$ npm install
```

2. Start the development environment.

```bash
$ npm run start
```

3. You will get an API Endpoint in your terminal.

```bash
$ ApiEndpoint: https://htt28lghhb.execute-api.ap-southeast-1.amazonaws.com
```

![image](https://user-images.githubusercontent.com/63979210/157759167-ab3536a8-816d-46b8-ada8-866a5004ad3a.png)


4. Send a request to screenshot your website:

```
https://htt28lghhb.execute-api.ap-southeast-1.amazonaws.com/?url=https://hackercollective.co&width=390&height=640
```

5. Run it in your browser, and you will get a screenshot back:

![image](https://user-images.githubusercontent.com/63979210/157759267-8cd4aa21-cf79-4f3e-bd13-96304d5fe8b9.png)


## Commands

### `npm run start`

Starts the local Lambda development environment.

### `npm run build`

Build your app and synthesize your stacks.

Generates a `.build/` directory with the compiled files and a `.build/cdk.out/`
directory with the synthesized CloudFormation stacks.

### `npm run deploy [stack]`

Deploy all your stacks to AWS. Or optionally deploy, a specific stack.

### `npm run remove [stack]`

Remove all your stacks and all of their resources from AWS. Or optionally
removes, a specific stack.
