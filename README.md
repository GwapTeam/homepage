# homepage

## Overview
gakken educational homepage texts

## Submodule
vendor file: https://github.com/GwapTeam/vendor


## branch
* master
    * Used for release
* develop
    * Used for release (operation confirmed)
* feature
    * Used for development (operation not confirmed)

The Teaching Material Creation Team check `development` branch and push it to` master` branch when judging it is usable.
The Developer always push the latest code to `feature` branch and push it to` development` branch on completion of the operation check.

## commit message
reference: https://qiita.com/KosukeSone/items/514dd24828b485c69a05
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
