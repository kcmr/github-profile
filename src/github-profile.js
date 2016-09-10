Polymer({
  is: 'github-profile',

  properties: {
    user: String,

    location: {
      type: Boolean,
      value: false
    },
    followers: {
      type: Boolean,
      value: false
    },
    company: {
      type: Boolean,
      value: false
    },
    blog: {
      type: Boolean,
      value: false
    },
    bio: {
      type: Boolean,
      value: false
    },
    email: {
      type: Boolean,
      value: false
    },
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
