'use strict'

var Backbone = require('backbone')

var _ = require('underscore')

/*
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
}
*/

var template = require('./app-view.tpl')

var viewOptions = {
    el: 'body',

    initialize: function () {
        this.render()
    },

    render: function () {

        this.$el.html(template({noun: 'red bull'}))

        return this
    }
}

module.exports = Backbone.View.extend(viewOptions);
