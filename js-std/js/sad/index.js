sad1 = new Sad("Сад один")   //создать сад
sad1.addDerevia(3) //добавить деревья
console.log(sad1)  // состояние сада
sad1.passDay(30) // пропустить (дней) в саду
sad1.dereviaVSadu() // Справка по количеству яблонь в саду
console.log(sad1) //состояние сада
sad1.spravkaPoSadu("На земле") // сколько каких яблок есть в саду. Вводить в кавычках.


//При создании сад генерирует от 12 до 30 деревьев, на которых от 12 до 30 яблок. Данные параметры можно варьировать
//При генерации как яблоки, 
//так и деревья имеют рандомный возвраст от 1 до 30 дней. В сад можно посадить новые деревья с помощью addDerevia("Число деревьев")
//свежедобавленные деревья будут иметь возраст = 1 дню и пустые (не успели яблочки народиться)
//Яблоки на деревья добавить нельзя, ибо это маразм.
//Яблоки сами зарождаются на дереве каждые 30 дней. Частоту можно корректировать.
//dereviaVSadu() поможет узнать количество яблонь в саду.
//spravkaPoSadu("Значение") даёт справку о количестве тех, или иных яблок в саду.
//Значение может принимать следующие значения : 
//По цвету : "Зелёное">"Красно-зелёное">"Красное"
//По размеру: "Маленькое">"Среднее">"Большое"
//По свежести: "Стухло">"Свежак"
//По Состоянию: "На ветке">"На земле"
//Яблоки могут испортится рандомно, с у величивающейся вероятностью, начиная с 27-го дня. (черви, все дела)
//И падают на землю с увеличивающейся, начиная с 28 дня. На 31 они упадут 100%
//Спустя 5 дней после падения яблоки мистиическим образом исчезают из сада.
//Ну и passDay(30) - адёт возможность накрутить возраст садо. В скобках - количество суток, на которые надо состарить сад.

