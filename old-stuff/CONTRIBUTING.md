# Contributing Guide

Welcome! Thank you for being interested in contributing to the SKALE Network documentation.
Please read on for more information on how to update the docs

## Setup + Install

First, fork the repo on GitHub, then clone your fork.
Once cloned, install all dependencies in the root of the project:

```shell
npm install -f
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
    -   bug
    -   content
    -   config
    -   cleanup

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
