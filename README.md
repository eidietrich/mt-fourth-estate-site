# Poor Richard [![Netlify Status](https://api.netlify.com/api/v1/badges/0bc95633-f6ac-4e3b-993f-2ec13af97eba/deploy-status)](https://app.netlify.com/sites/poor-richard-spotlightpa/deploys)

**Fork** - Assessing how easy it will be to adapt this for a [Montana Free Press](https://montanafreepress.org/) project.

A static site for [Spotlight PA](https://www.spotlightpa.org) hosted by [Netlify](https://www.netlify.com/).

All content copyright Spotlight PA. Code available under the MIT license. Photos used with permission as indicated.

## Usage
- Install [Hugo](https://gohugo.io/) and Yarn
- Clone, cd, etc.
- Run `yarn` to setup frontend dependencies and code testing
- Run `yarn start` and open http://localhost:1313/ to develop
- Run `yarn format` to format code
- Run `yarn test` to test code
- Run `yarn build:prod` to create a production build

## Things to figure out
* Image management
* How to hook up CMS

## TODOS
* Add option for filtering partners by project (e.g. participated-in array field in data section, or participants field in project data)
* Audio embed feature
* Figure out how to do interstitial photos/video
* Figure out how to manage Pym embeds --> Some sort of system with a "graphics" folder

## Adding projects

TODO: Figure out how to de-redundecize this, see if it's possible to work this out from CMS. Can participant data fields be replaced by data in project _index.md header? Can menus be calculated automatically?

Current needs
* Add section folder + content for stories
* Add menu data
* Add to data section