(function () {
  'use strict';

  angular.module('exam', [])
    .controller('toBuyController', ToBuyController)    
    .service('itemsService', ItemsService);
  ToBuyController.$inject = ['itemsService'];
  function ToBuyController(service) {
    var controller = this;
    controller.toBuyItems = service.getToBuyItems();

    controller.addToBought = function (itemIndex) {
      service.addBoughtItem(itemIndex);
    }
    controller.hideToBought = function (itemIndex) {
      service.hideBoughtItem(itemIndex);

    }
  };  

  function ItemsService() {
    var service = this;

    var toBuyItems = [
      new Item('Ведмедик', 10, true),
      new Item('Лялька', 100, true),
      new Item('Трансформер', 50, true),
      new Item('Пазли', 5, true),
      new Item('Кубік-Рубік', 1, true),
      new Item('Конструктор', 200, true)
    ];

    service.addBoughtItem = function (shopItemId) {
      toBuyItems.splice(shopItemId, 1);
    };


    service.hideBoughtItem = function (itemIndex) {
      toBuyItems[itemIndex].condition = false      
    }

    service.getToBuyItems = function () {
      return toBuyItems;
    };
  };

  class Item {
    constructor(mark, amount, condition) {
      this.mark = mark;
      this.amount = amount;
      this.condition = condition
    };
  };

})();
