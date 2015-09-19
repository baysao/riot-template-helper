// Empty template; logic in `onRendered` below
Template.Riot = new Template("Template.Riot", function () { return []; });

Template.Riot.onRendered(function () {
  var self = this;
  var container = this.firstNode.parentNode;
  this.container = container;
  this.autorun(function (c) {
    var data = Blaze.getData();

    var comp = data && data.component;
    if (! comp) {
      throw new Error(
        "Call to `{{> React ... }}` missing " +
          "`component` argument.");
    }

    var props = _.omit(data, 'component');
    self.tag = Riot.mount(container, comp, props)[0];
  });
});

Template.Riot.onDestroyed(function () {
  if(this.tag.isMounted) {
    this.tag.unmount(true);
  }
});

