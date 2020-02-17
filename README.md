# MT Fourth Estate site

Adapted from Spotlight PA's [Poor Richard](https://github.com/spotlightpa/poor-richard) site. 

A static site for the [Montana Free Press](https://montanafreepress.org)-coordinated [Montana Fourth Estate collaboration](https://montanafourthestate.org), hosted by [Netlify](https://www.netlify.com/).

All content copyright Montana Fourth Estate. Code available under the MIT license.

## Usage
- Install [Hugo](https://gohugo.io/) and Yarn
- Clone, cd, etc.
- Run `yarn` to setup frontend dependencies and code testing
- Run `yarn start` and open http://localhost:1313/ to develop
- Run `yarn format` to format code
- Run `yarn test` to test code
- Run `yarn build:prod` to create a production build

## Documentation

Access content editor login from https://montanafourthestate.org/admin.

Markdown shortcodes:



### Inline images
Use dropdown menu or switch from "Rich Text" to "Markdown" view and add
```md
![](/img/uploads/photo-slug.png)
```


#### Pull quotes
Switch from "Rich Text" to "Markdown" view
```md
{{<pullquote>}}This is emphasized{{</pullquote>}}
```

### Audio
Upload file, switch text editor from "Rich Text" to "Markdown" view
```md
{{<audio src="this-is-a-podcast.mp3">}}This is a caption{{</audio>}}
```


#### Pym.js graphic embeds
Switch from "Rich Text" to "Markdown" view
```md
{{<pym src="https://apps.montanafreepress.org/graphics/201802-death-penalty-bill-history/" id="0">}}This is a caption{{</pym>}}
```


## TODO
- Full deploy to URL + HTTPS wrangling