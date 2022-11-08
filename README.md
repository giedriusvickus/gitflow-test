# frontend-protocols

## Running project for the first time

In order to be able to publish new version you have to have these installed:

    nodejs version 12
    yarn package manager
    npm package manager

    1. git clone
    2. yarn


## Deploy new version

Automated script will bump "patch" version only. If you want to bump "minor" version, this will have to be done manually.

i.e. Script will bump 1.1.1 -> 1.1.2

Commands to run

    1. Commit changes
    2. Make sure you are on main branch
    3. yarn run release

## Deploy new test version

Automated script will bump "prerelease" version only.
i.e. Script will bump 1.1.1 -> 1.1.1-rc.0

This script can't be run on `main` branch.

Commands to run

    1. Commit changes
    2. yarn run release-rc

## Deploy new version if you changed version yourself

    1. commit package.json with new version assigned
    2. yarn run release-no-bump


```
!Important!
Publishing new version does not trigger any deployments, etc.
Commits to this repository will not trigger any deployments

After new version is published [npm publish] new version 
of this package will be available as npm module. Update rankings 
repository package.json file with newly published version of @dappradar/protocols
in order to get those changes to production/staging
```