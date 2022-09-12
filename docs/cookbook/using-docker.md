# Building Docker images for Apostrophe projects

[Docker](https://www.docker.com/) is a containerization platform that lets developers build an image for their projects and then run it anywhere. This document will guide you through setting up Docker and using it to create an image for hosting your Apostrophe project.

The initial steps of this guide will assume that you will be hosting your database, project, and uploaded assets on the same server. The second part will outline steps for configuring to use the AWS S3 service for hosting assets. Finally, the third portion will provide guidance for using the MongoDB Atlas multi-cloud database.

## Install Docker

Docker can be installed on Mac, Windows, and Linux machines with either a CLI interface or using the Docker Desktop application, which acts as a graphical interface to the Docker engine. For this tutorial, we will use the CLI version. You can read more about Docker and install it on your machine by following the instructions in the Docker [docs](https://docs.docker.com/get-started/). Feel free to walk through the tutorials that you find there, but it isn't necessary before following this tutorial. We will cover any necessary terminology as we walk step-by-step through getting Apostrophe running. However, please verify that your Docker install works before continuing.

## Apostrophe project setup

For this tutorial, we will be using the [a3-demo](https://github.com/apostrophecms/a3-demo) template. However, you can also use an existing project or create a new one by following our getting started [tutorial](https://v3.docs.apostrophecms.org/guide/setting-up.html). If using the a3-demo, follow the link and click on the "Use this template" button to fork the template into your own repo. Next, clone the repo to your local machine and open it in your favorite code editor.

## Creating the dockerfile

The [`Dockerfile`](https://docs.docker.com/engine/reference/builder/) passes a series of command line instructions to build an image. The a3-demo project already has a bare bones `Dockerfile` that we can modify. If using a different project, create a `Dockerfile` at the root of your project. Below is an example of a file to build a container for a basic Apostrophe project:

<AposCodeBlock>
```bash
FROM node:lts-alpine3.15

WORKDIR /srv/www/apostrophe

RUN chown -R node: /srv/www/apostrophe
USER node

COPY --chown=node package*.json /srv/www/apostrophe/
RUN npm ci

COPY --chown=node . /srv/www/apostrophe/

NODE_ENV=production
RUN ./scripts/build-assets.sh

CMD ["node", "app.js"]
```
<template v-slot:caption>
  Dockerfile
</template>

Let's walk briefly through each of the lines. The first line specifies that this image will extend an existing image with the long-term support version of node.js running on an alpine linux v3.15 operating system. If you need another version of node or a newer version of alpine linux, you should alter this line to build from an [official](https://hub.docker.com/_/node/) or another image. You will likely want to match both the node.js version and linux distro to what is currently supported by your server.

The `WORKDIR` command is used to define the working directory of the Docker container where all of the subsequent commands will be run. It implicitly runs both `mkdir` and `cd` commands. 

By default, when we issue commands within the `Dockerfile` they are run within the container as a root user. This is typically a bad idea and can even lead to some commands not working correctly. Now that we have a directory made, we reassign it to a low-level user `node` using the Docker `RUN` command and the linux `chown` command. Everything following `RUN` will be passed to the command line inside the container. Next, we switch to the new user using the `USER` command.

We are now going to install all of our dependencies inside of the working directory. First, we copy the `package.json` and `package-lock.json` into our project and then add those dependencies using `RUN npm ci`.

Following the dependency install, all of the necessary project files are copied into the container. Note that we will also create a `.dockerignore` file to exclude some files and folders from being copied.

After adding the `NODE_ENV=production` environment value weNext, we run a script to trigger the apostrophe asset build (we will cover this script next). In order to set a unique `APOS_RELEASE_ID` environment variable each time we change files and redeploy, we are using the script to create a `release-id` file with a unique string. Otherwise, we would have to change this string each time manually. We will also cover how to pass these variables in from a file to make connecting to external databases and storage easier.

If your project contains devDependencies that are not needed in production you can add an optional line after the build script:
`RUN npm prune –production`

Finally, the last line of this file provides the command to trigger our project to run.

## Creating the install script

The alpine linux distro is slim and doesn't include bash, but we can access a shell at `/bin/sh`. Into the `scripts` folder at the root of your project create the following file:

<AposCodeBlock>
```bash
#!/bin/sh

export APOS_RELEASE_ID=`cat /dev/urandom |env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1`

echo $APOS_RELEASE_ID > ./release-id

node app @apostrophecms/asset:build
```

<template v-slot:caption>
  scripts/build-asset.sh
</template>

</AposCodeBlock>
We won't go through this file in detail. As covered in the previous section, it creates a random unique string and copies it out to a file `release-id` at the root of the project. It then triggers the `@apostrophecms/asset` module to build the assets. That module will read the `release-id` file and use the string in the build.

## Creating a `.dockerignore` file
The [`.dockerignore`](https://docs.docker.com/engine/reference/builder/#dockerignore-file) file acts to prevent specific files from being copied into your final image. This is important to prevent sensitive or unnecessary files from being incorporated into your image. This example `.dockerignore` file is set up to ignore **all** files by having an `*` wildcard as the first line. It then adds files and folders we do want to be copied back in by prefixing them with a `!`. This pattern prevents us from accidentally allowing the copy of a newly added file.

<AposCodeBlock>
```bash
*
!LICENSE
!deployment/
!lib/
!modules/
!public/images/
!README.md
!scripts/
!views/
!app.js
!package.json
!package-lock.json
```

<template v-slot:caption>
  .dockerignore
</template>
</AposCodeBlock>

## Creating a `docker-compose.yaml` file
In this guide, we are starting by creating multiple containers and a persistent volume. This is so that we can provide both a MongoDB instance and a place to store uploaded assets. We are going to do this using [Docker Compose](https://docs.docker.com/compose/) and a `docker-compose.yml` file. In the next sections of the tutorial, we will look at removing the extra container and volume by taking advantage of cloud storage and database services. Create this file at the root of your project.

<AposCodeBlock>
```bash
services:
  db:
    image: mongo:4.4.14
    ports:
      - "27017:27017"
    volumes:
      - /data/db
  web:
    build:
      context: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV
      - APOS_MONGODB_URI
      - APOS_CLUSTER_PROCESSES
    depends_on:
      - db 
    volumes:
      - /srv/www/apostrophe/public/uploads
```

<template v-slot:caption>
  docker-compose.yaml
</template>

The spacing in this file is very important. White-space, not tab, indentation indicates that a particular line is nested within the object passed on the line above it. Walking through this file, it starts with `services`. From the indentation, we can see that we are creating two services - a `db:` container and a `web:` container.  Much like our `Dockerfile`, within the `db:` we start by specifying an image to run. In this case it is the `mongo:4.4.14` official image for running MongoDB v4.4.14. Other images can be found in the docker library GitHub repo [README](https://github.com/docker-library/docs/blob/master/mongo/README.md#supported-tags-and-respective-dockerfile-links). You should use the version that mirrors your development environment.

Next, we are specifying that the database should communicate over port `27017`. This is the port typically used by Apostrophe, but might need to be altered to match your environment.

Finally, we add a volume for the MongoDB storage engine to write files into. You shouldn't need to change this.

Looking at the `web:` container, we aren't passing an image but instead passing `build`. Within this, we are adding `context: .` which specifies we should build the image for this container from the `Dockerfile` in the same directory.

The next two lines starting with `ports:` list the ports that the container should listen through, in this case, the typical port 3000.

The `environment:` key lists environment variables that will get passed into the container. We could set the value of these here but are using a `.env` file instead.

The `depends_on:` key indicates that our Apostrophe instance requires the presence of the `db` container that we created first.

Finally, much like with the database, we are persisting a volume for any uploads to be written into. Without this, any uploads would be lost the next time we deployed.

## Creating the `.env` file
The last file we need to create before bringing our project up is a `.env` file at the root of our project containing the environmental variables. In this example file, we are assuming that you are hosting on a single server. Therefore we are setting the `APOS_CLUSTER_PROCESSES` environment variable to `2` to ensure that there is availability in case of a restart due to a crash. This number could be increased depending on your server.

<AposCodeBlock>
```bash
NODE_ENV=production
APOS_MONGODB_URI=mongodb://db:27017/apostrophe
APOS_CLUSTER_PROCESSES=2
```

<template v-slot:caption>
  .env
</template>

</AposCodeBlock>

The only other line that might need alteration is the `APOS_MONGODB_URI` if your database needs to listen on a different port.

## Spinning our project up
Bringing our project up in Docker is a two-step process. First, from the CLI run `docker compose build`. This will create our project image. You should see commands from your `Dockerfile`, messages from the npm install, and then the familiar messages from Apostrophe as it builds the assets.

When this finishes you can run the command `docker compose up`. This will bring your project up and if you are using the defaults, allow you to access the site at `http://localhost:3000`. At this point, you won't be able to log in because it is a fresh database. To do this, you need to open a session with your container running Apostrophe. The name for this container should be <YourProjectName_web> if you used the default settings. With both containers still running, give the following command from your terminal.

```bash
docker run –network="host" -it <YourProjectName_web> /bin/sh
```
Just replace the `<YourProjectName_web>`. If you get an error you can check your container name by running:

```bash
docker container ls
```
This will list all of your containers. Pick the one running your project image, not the database container.

When the connection to you container is established you issue the normal command for adding an Apostrophe admin to the database.

```bash
node app @apostrophecms/user:add admin admin
```
Now you should be able to log in as normal.

If you want to bring the site down use:

```bash
docker compose down
```

## Using AWS S3 services
If you aren't hosting your project on a single server, you will need to have a different uploaded asset storage method. Typically this is a service like Amazon Web Services S3 or another similar service. Apostrophe is set up to easily use S3 services by adding environment variables. You can read more in the [documentation](https://v3.docs.apostrophecms.org/reference/modules/uploadfs.html#s3-storage-options). We can take advantage of this in Docker by expanding our `docker-compose.yml` and `.env` files.

### Changing the `docker-compose.yaml` file
In order to pass the environment variables into our project container we just need to add them inside the `environment:` key. If we are using S3 services at Amazon, we need to add four variables: 'APOS_S3_REGION`, `APOS_S3_BUCKET`, `APOS_S3_KEY`, and `APOS_S3_SECRET`. For other S3-type storage solutions, such as [filebase](https://filebase.com/), you will also want to set the `APOS_S3_ENDPOINT` variable. For Amazon, your `environment:` section should now look like this:

<AposCodeBlock>

```yaml
…
    environment:
      - NODE_ENV
      - APOS_MONGODB_URI
      - APOS_CLUSTER_PROCESSES
      - APOS_S3_REGION
      - APOS_S3_BUCKET
      - APOS_S3_KEY
      - APOS_S3_SECRET
…
```

<template v-slot:caption>
  docker-compose.yaml
</template>

</AposCodeBlock>

### Changing the `.env` file
Next, the `.env` file should be modified to contain values for each of the new environment variables. Each will get populated with values specific to your S3 buckets. Again, add the `APOS_S3_ENDPOINT` with value if using a service not hosted by AWS.

<AposCodeBlock>

```sh
NODE_ENV=production
APOS_MONGODB_URI=mongodb://db:27017/apostrophe
APOS_S3_REGION=<your region>
APOS_S3_BUCKET=<your bucket name>
APOS_S3_KEY=<account key>
APOS_S3_SECRET=<account secret>
```

<template v-slot:caption>
  .env
</template>

</AposCodeBlock>

In addition to these changes, you will also likely have to change your `@apostrophecms/uploadfs` options for accessing the bucket. For example:
<AposCodeBlock>

```javascript
module.exports = {
  options: {
    uploadfs: {
      bucketObjectsACL: 'bucket-owner-full-control'
    }
  }
};
```

<template v-slot:caption>
  modules/@apostrophecms/uploadfs/index.js
</template>

</AposCodeBlock>

### Finishing up
Just like with the Docker container previously, you can now bring the site up with:

```cli
docker composer up
```
Any assets uploaded through the site will now be stored in your S3 bucket rather than on the server directly.

## Using MongoDB Atlas
[MongoDB Atlas](https://www.mongodb.com/atlas/database) is a robust, multi-cloud database service. There are a number of advantages, but one is that using a cloud database means that our project can run on multiple servers but still all access the same database. If we run our project in a docker container without an accompanying database container, we don't have to use Docker Compose. However, since we have already built these assets, we can continue with these files. Two files must be altered - `docker-compose.yaml` and `.env`.

### Changing the `docker-compose.yaml` file
Since we no longer have to use the database container, we can simply delete that whole section from the `services:`.

### Changing the `.env` file
First, start by getting an account and setting up a project and cluster according to the [instructions](https://www.mongodb.com/docs/atlas/?_ga=2.115258319.959071482.1662986164-305956368.1655805952&_gac=1.50376795.1662898658.Cj0KCQjwjvaYBhDlARIsAO8PkE2KG3UP3yszcTYrzDpB8BRxDZ7vM2vLMafvX59emZZKkDExo_ZPZRIaAneGEALw_wcB) at the Atlas site. Once you do this, you can get the connect string for your database. The `APOS_MONGODB_URI` was already being set within the `.env` file. You simply need to substitute your connect string for the value.

::: note
Any special characters in your user name or password within the connection string need to be converted to %-encoding.
:::

### Finishing up
Since this will create a new database, once you bring your site up you should add an admin user as was [detailed](#spinningourprojectup) when we used the containerized version.

To bring the site up use :
```cli
docker composer up
```

To bring it down:
```cli
docker composer down
```

## Deploy
**TO BE FINISHED**