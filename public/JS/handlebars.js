window.onload = function qqq(){
  var headerBlock = document.getElementById("header-template").innerHTML;

  var template = Handlebars.compile(headerBlock);

  var quoteData = template({
    links: [
      {
        link: 'index',
        linkText: 'О нас'
      },
      {
        link: 'tickets',
        linkText: 'Билеты'
      },
      {
        link: 'account',
        linkText: 'Личный кабинет'
      },
      {
        link: 'shoppingBag',
        linkText: 'Корзина'
      }
    ]
  });

  document.getElementById("header-block").innerHTML += quoteData;
}
