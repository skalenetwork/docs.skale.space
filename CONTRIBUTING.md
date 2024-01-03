# Contributing Guide

Welcome! Thanks for viewing the guide to contributing. As an open source project, we appreciate contributors of any size, from anyone regardless of skill level or experience. The following document will guide you through how to setup the documentation in your local repository as well as

## Setup + Install

First, fork the repo on GitHub, then clone your fork:

```shell

# Using HTTP
git clone https://github.com/Dirt-Road-Development/shiny-octo-giggle.git && cd shiny-octo-giggle

# Using SSH
git clone git@github.com:Dirt-Road-Development/shiny-octo-giggle.git && cd shiny-octo-giggle
```

Once cloned, install all dependencies in the root of the project:

```shell
npm install
```

You are now ready to make changes and contribute!

## Development

To run the development server, run the following command:

```shell
npm run dev
```

## Branches

### Release Branch

The main branch is the active production release of the documentation.

### Development Branches

Developers interested in contributing should fork the main branch and checkout a new branch. The name of the branch should follow the following format: <github-username>/<type>/<name>.

**Available Types**

-   feature
-   fix
-   content
-   config

**Examples**

-   thegreataxios/feature/add-navbar-component
-   thegreataxios/content/add-tutorial-on-bulding-unity-game

## Creating Pull Requests

Once you make your changes, it is time to create your pull request to merge these changes into the production branch!

### PR Title

The format of the PR

-   Title: type(component): Description

> Example feat(tutorial): Create Tutorial for Unity Game

### PR Body

Please provide a description of the PR

### Link Issues

Please link any relevant issues to your PR so they close automatically

### Request Review

Request the review of **TheGreatAxios** on your PR
