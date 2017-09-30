# homepage
https://github.com/GwapTeam/homepage

## Overview
gakken educational homepage texts

### submodule
vendor file: https://github.com/GwapTeam/vendor

### branch
* master
    - Used for release
* develop
    - Used for release (operation confirmed)
* feature
    - Used for development (operation not confirmed)

The Teaching Material Creation Team check `development` branch and push it to` master` branch when judging it is usable.
The Developer always push the latest code to `feature` branch and push it to` development` branch on completion of the operation check.

### commit message
reference: https://qiita.com/KosukeSone/items/514dd24828b485c69a05

### filename
_HTML, CSS: kebab-case_
defalut : `original-filename.html`
complete: complete-`original-filename.html`

_JS: camelCase_
defalut : `original-filename.extension`
complete: complete-`original-filename.extension`

### JavaScript coding style
Use [ECMAScript5](http://kangax.github.io/compat-table/es5/)

Case: Variable declaration
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) Bad
```javascript
let   variable;
const constant;
```
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Good
```javascript
var variable;
```

Case: anonymous function
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) Bad
```javascript
setTimeout(
  _ => console.log('left 1000ms'),
  1000
)
```
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) Good

```javascript
setTimeout(
  function () => {
    console.log('left 1000ms');
    return true;
  },
  1000
)
```

reference: http://cou929.nu/data/google_javascript_style_guide/

## Example
### clone
_Branch: `master`_
```bash
$ git clone --recursive -j8 git@github.com:GwapTeam/vendor.git
```

_Branch: `development`_
```bash
$ git clone --recursive -j8 git@github.com:GwapTeam/vendor.git
```

_Branch: `feature`_
```bash
$ git clone --recursive -j8 git@github.com:GwapTeam/vendor.git
```

### pull submodule
```
$ git submodule foreach git pull origin master
```
