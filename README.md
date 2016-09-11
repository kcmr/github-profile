# github-profile

Custom Element to display a badge with a Github profile.
By default only the avatar, user name and user ID are shown. A content placeholder
similar to that used by Facebook or Medium is shown until the Github data is loaded.

![Demo](github-profile-demo.gif)

Example:
```html
<github-profile user="yourUserID"></github-profile>
```

## Optional boolean attributes
Attribute name | Description | Default
:-- | :-- | :--
location | Show location | false
followers | Show followers count | false
company | Show company | false
blog | Show blog or custom URL | false
bio | Show bio | false
email | Show email | false

## Github quota limits

Get an [Access Token from Github](https://developer.github.com/v3/auth/#basic-authentication) to prevent exceding the quota limits.

Example:
```html
<github-profile user="kcmr" access-token="XXXX..."></github-profile>
```

Check out the [API Docs]() for more info.

## Install

Install the component using [Bower](http://bower.io/):

```bash
$ bower i -S kcmr/github-profile
```

## Usage

Import Web Components polyfill:

```js
<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
```

Import Custom Element:

```html
<link rel="import" href="bower_components/github-profile/github-profile.html">
```

Use it!:

```html
<github-profile user="yourUserID" location bio></github-profile>
```
