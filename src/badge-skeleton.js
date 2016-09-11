Polymer({
  is: 'badge-skeleton',
  properties: {
    avatarSize: {
      type: Number,
      value: 50,
      observer: '_avatarSizeObserver'
    }
  },
  _avatarSizeObserver: function(size) {
    this.customStyle['--github-profile-avatar-size'] = size + 'px';
    this.updateStyles();
  }
});
