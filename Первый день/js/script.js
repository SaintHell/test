function myFirstApp(name, age) {
	alert("Добрый день, меня зовут " + name + " и это моё первое приложение");
	let youName = prompt("Вам не составит труда написать ваше имя?");

	function showSkills() {
		alert("Ну что, хотите узнать чем я владею ?");
		let skills = ["HTML", "CSS", "Adobe Audition", "Adobe Photoshop"];

		for (let i = 0; i < skills.length; i++) {
			let text = "я владею " + skills[i] + "<br>";
			document.write(text);
		}
	}

	function checkAge() {
		age = prompt("Соизвольте поинтересоваться " + youName + ", сколько вам лет?", "")
		if (age <= 75) {
			alert("У вас всё получится! Сила в вере!")
		} else {
			alert("Пожалуй стоит поднажать с обучением!")
			age = prompt("Если у вас есть сын или дочка " + youName + ", то сколько им лет?", "")
		if (age <= 60) {
			alert("Им как минимум стоит поинтересоваться программированием!")
		} else {
			alert("Уж лучше поведайте о программировании своимс внукам)))")
		}
		}
	}
	checkAge();

	function calcPow() {
		let number = prompt("Хотите узнать квадрат любого числа?, тогда просто напишите его");
		let numberCheck = number * number;
		alert(numberCheck);
	}
	calcPow();
	showSkills();
}

myFirstApp("Sergei " + ", мне " + "18 " + "лет");