// Generated by CoffeeScript 1.10.0
var BaseModel, Form, _,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

_ = require("underscore");

BaseModel = require('./base');

Form = (function(superClass) {
  extend(Form, superClass);

  function Form() {
    return Form.__super__.constructor.apply(this, arguments);
  }

  Form.prototype.set = function(attrs, options) {
    var newValue, oldValue, splitted;
    if (_.isString(attrs) && attrs.split('.').length > 1) {
      splitted = attrs.split('.');
      oldValue = this.get(splitted[0]);
      newValue = $.extend(true, {}, oldValue);
      if (splitted[2] != null) {
        newValue[splitted[1]][splitted[2]] = options;
      } else {
        newValue[splitted[1]] = options;
      }
      attrs = splitted[0];
      options = newValue;
    }
    return Form.__super__.set.apply(this, arguments);
  };

  return Form;

})(BaseModel);

module.exports = Form;
