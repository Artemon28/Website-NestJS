window.onload = function qqq(){
  var headerBlock = document.getElementById("header-template").innerHTML;

  var template = Handlebars.compile(headerBlock);

  var quoteData = template({
    links: [
      {
        link: '../index.html',
        linkText: 'О нас'
      },
      {
        link: 'tickets.html',
        linkText: 'Билеты'
      },
      {
        link: 'account.html',
        linkText: 'Личный кабинет'
      },
      {
        link: 'shoppingBag.html',
        linkText: 'Корзина'
      }
    ]
  });

  document.getElementById("header-block").innerHTML += quoteData;
}
