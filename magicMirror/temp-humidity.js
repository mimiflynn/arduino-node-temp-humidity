const magicMirrorModule = {
  defaults: {
    text: 'Sky Shack Atmospheric Monitor'
  },
  getDom: function() {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = this.config.text;
    return wrapper;
  }
})

Module.register('temp-humidity', magicMirrorModule);
