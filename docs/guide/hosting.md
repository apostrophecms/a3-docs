# Hosting Apostrophe in production

## Server requirements

We recommend hosting Apostrophe in self-hosted production environments with the following minimum specifications:

| Software | Minimum Version |
| ------------- | ------------- |
| Ubuntu | 16+ |
| [NGINX](https://www.nginx.com/) (or another proxy server) | Latest |
| [Node.js](https://nodejs.org/en/) | 12.x+ |
| [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)  | 3.6+ |
| [ImageMagick](https://imagemagick.org/script/download.php#macosx) (optional) | Any |


| Hardware specification | Minimum recommendation |
| ------------- | ------------- |
| RAM | **2GB** (to support the application and database) |
| Disk space | **20GB** (see note below) |

1GB of RAM may be sufficient if using a remote database service (e.g., MongoDB Atlas). Sites running in a multicore configuration will require additional 2G or more RAM and, of course, CPU cores.

::: note
MongoDB requires a minimum of 5GB free disk space at all times. Small websites may not need much more additional space than that. We have found that 20GB is sufficient for most Apostrophe applications, but more space may be necessary to handle an especially large number of file uploads or especially large uploaded files.
:::

## Deployment basics

Deployment processes will vary depending on the hosting environment, technical requirements, and team preferences. There are a few steps that all deployment processes should include.

1. If Apostrophe has been running on the server already, **stop the application process(es).**
2. **Run the data migration task: `node app @apostrophecms/migration:migrate`.** This will run both core data migrations as well as project-level migrations.
3. **Run the build process: `node app @apostrophecms/asset:build`.** This runs automatically in development environments, but not if `NODE_ENV=production` or if the `autoBuild: false` option is set on the application. That is to ensure that the build is an intentional part of deployment and that developers can execute it along with other production build tasks as necessary.
4. **Start (or restart) the application process(es).**

## Best practices

### Run multiple processes

Running the website on multiple server processes is always a good idea in the production environment. It is usually not necessary to run more than two processes. Also make sure not to run more processes than you have CPU cores available (see your hosting plan).

We recommend using a utility such as [PM2](https://pm2.keymetrics.io/) to start and run these processes. PM2 will also restart the processes in the rare case of a crash.

### Minifying assets

Apostrophe concatenates [project-level front end code](/guide/front-end-assets.md#placing-client-side-code) and, in browsers with a logged-in user, delivers it to browsers with the user interface code as well. There is no advanced minification applied. If needed, apply any advanced minification prior to running the production build task.