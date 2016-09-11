Polymer({
  is: 'github-profile',

  properties: {
    /**
     * Github username without @ sign.
     * Required.
     */
    user: String,

    /**
     * Show location.
     */
    location: {
      type: Boolean,
      value: false
    },

    /**
     * Show followers count.
     */
    followers: {
      type: Boolean,
      value: false
    },

    /**
     * Show company.
     */
    company: {
      type: Boolean,
      value: false
    },

    /**
     * Show blog.
     */
    blog: {
      type: Boolean,
      value: false
    },

    /**
     * Show bio.
     */
    bio: {
      type: Boolean,
      value: false
    },

    /**
     * Show email.
     */
    email: {
      type: Boolean,
      value: false
    },

    /**
     * Github access token used to prevent exceding the quota limits.
     */
    accessToken: {
      type: String,
      value: ''
    },

    /**
     * True if the Github user has been loaded.
     */
    loaded: {
      type: Boolean,
      value: false,
      notify: true,
      readOnly: true
    },

    /**
     * Size in pixels for the avatar.
     */
    avatarSize: {
      type: Number,
      value: 50,
      observer: '_avatarSizeObserver'
    },

    _url: String
  },

  observers: [
    '_computeUrl(user, accessToken)'
  ],

  _computeUrl: function(user, accessToken) {
    var token = '';
    if (accessToken.trim().length) {
      token = '?access_token=' + accessToken;
    }
    this._url = 'https://api.github.com/users/' + user.trim() + token;
  },

  _computeHidden: function(condition) {
    return condition ? 'hidden' : 'visible';
  },

  _onResponse: function() {
    this._setLoaded(true);
  },

  _onError: function(e) {
    this.fire('load-error', {
      error: e.detail.error
    });
  },

  _avatarSizeObserver: function(size) {
    this.customStyle['--github-profile-avatar-size'] = size + 'px';
    this.updateStyles();
  }

  /**
   * Fired when an error is received.
   * @event load-error {{error: Object}} detail Error detail.
   */

});
