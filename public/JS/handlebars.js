window.onload = function qqq(){
  var headerBlock = document.getElementById("header-template").innerHTML;

  var template = Handlebars.compile(headerBlock);

  var quoteData = template({
    links: [
      {
        link: '/index.hbs',
        linkText: 'О нас'
      },
      {
        link: '/tickets.hbs',
        linkText: 'Билеты'
      },
      {
        link: '/account.hbs',
        linkText: 'Личный кабинет'
      },
      {
        link: '/shoppingBag.hbs',
        linkText: 'Корзина'
      }
    ]
  });

  document.getElementById("header-block").innerHTML += quoteData;
}
