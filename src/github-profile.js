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
     * True if the Github user has been loaded.
     */
    loaded: {
      type: Boolean,
      value: false,
      notify: true,
      readOnly: true
    },

    _url: {
      type: String,
      computed: '_computeUrl(user)'
    },
    _totalFields: {
      type: Array,
      value: function() {
        return ['user', 'name'];
      }
    }
  },

  _computeUrl: function(user) {
    return 'https://api.github.com/users/' + user.trim();
  },

  _computeHidden: function(condition) {
    return condition ? 'hidden' : '';
  }

});
