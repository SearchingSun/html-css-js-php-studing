book1 = new book("Ужасы")
book2 = new book('Сказки')
let skaf1 = new skaf(8)
console.log(book1, book2)
console.log(book1.bookName())

skaf1.putB(book1, 3);
skaf1.putB(book2, 2);
console.log(skaf1)
skaf1.getB(book1, 6);