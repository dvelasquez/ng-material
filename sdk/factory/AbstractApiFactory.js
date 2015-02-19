/**
 * Created by dvelasquez on 19-02-15.
 */
'use strict';

var app = angular.module('Factory.Api');

app.service('AbstractApiFactory', [

    function () {
    
        function AbstractApiFactory(Restangular, route) {
            this.restangular = restangular;
            this.route = route;
        }
    
        AbstractApiFactory.prototype = {
            getList: function (params) {
                return this.restangular.all(this.route).getList(params).$object;
            },
            get: function (id) {
                return this.restangular.one(this.route, id).get();
            },
            getView: function (id) {
                return this.restangular.one(this.route, id).one(this.route + 'view').get();
            },
            update: function (updatedResource) {
                return updatedResource.put().$object;
            },
            create: function (newResource) {
                return this.restangular.all(this.route).post(newResource);
            },
            remove: function (object) {
                return this.restangular.one(this.route, object.id).remove();
            }
        };
    
        AbstractApiFactory.extend = function (repository) {
            repository.prototype = Object.create(AbstractApiFactory.prototype);
            repository.prototype.constructor = repository;
        };
    
        return AbstractApiFactory;
    }
]);