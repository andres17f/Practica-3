"use strict";

/* Page functions */

function Person(name, surname) {
    this.name = name;
	this.surname = surname;
	var concat = name + " " + surname;
	
	this.Concat = function() {
		return this.name + " " + this.surname;
	}
}
Person.prototype = {};
Person.prototype.constructor = Person;

function ListPerson() {
	var list = new Array();
	var MAX_ELEM_LIST = 5;

	this.isEmpty = function() {
		return (list.length === 0);
	} 

	this.isFull = function() {
		return (list.length === MAX_ELEM_LIST);
	} 

	this.sizeList = function() {
		return list.length;
    }

	this.addPerson = function(person) {	 	
		if (!(person instanceof Person)) { 
			throw "Not an instance of person";
		}		
		var position = list.indexOf(person); 	
		if (position === -1){
			list.push(person);
			list.sort(function (a, b) {
				var r = a.surname.localeCompare(b.surname);
				return (r == 0)? a.name.localeCompare(b.name) : r;
			});
		}	
	}

	this.get = function (index) {
		return list[index];
	}

	this.toString = function() {
		var str = "";
		for(var i = 0; i<list.length; i++){
			str = str + list[i].name + " " + list[i].surname + "\n";
		}
		return str;
	}

	this.toStringPerson = function(person) {
		if (!(person instanceof Person)) { 
			throw "Not an instance of person";
		}
		return person.name + " " + person.surname + "\n";;
	}

	this.indexOf = function(person){
		if (!(person instanceof Person)) { 
			throw "Not an instance of person";
		}
		var position = -1;
		if (!list.isEmpty){
			position = list.indexOf(person);
		} else {
			throw "The list is empty"
		}
		return position;
	}

	this.lastindexOf = function(person){
		if (!(person instanceof Person)) { 
			throw "Not an instance of person";
		}
		var position = -1;
		if (!list.isEmpty){
			position = list.lastIndexOf(person);		
		} else {
			throw "The list is empty"
		}
		return position;
	}

	this.capacity = function(){
		return MAX_ELEM_LIST;
	}  

	this.clear = function() {
		if (list.lengt != 0){
			list.splice(0, list.length);	 		 		
		}
	} 

	this.firstPerson = function(){
		if (list.lengt = 0){		
			throw "The list is empty.";
		}
		return list[0];
	} 

	this.lastPerson = function(){
		var last= (list.length -1);
		if (list.lengt = 0){		
			throw "The list is empty.";
		}
		return list[last];
	} 

	this.remove = function (index){
		var pos = index;
		var length = list.length;
		var person = "";
		if (pos<length) { 
			person = list[index].name + " " + list[index].surname
			list.splice (pos, 1);
		} else {
			throw "The index is outside the limits of the list";
		} 	
		return person;
	}

	this.removePerson = function(person) {
		var persona = person.name + " " + person.surname; 
		var enco = false;
		var bus = "";
		for (var i=0; i<list.length ; i++) {
			var bus = list[i].name + " " + list[i].surname;
			if (bus === persona) {
				persona = list[i].name + " " + list[i].surname
				list.splice (i, 1);
				enco = true;
			}
		} 	 			
		return enco;
	} 
	
}
ListPerson.prototype = new Array();
ListPerson.prototype.constructor = ListPerson;

/*function de testeo*/

 function testlist(){
	var list = new ListPerson();

 	console.log ("Capacidad: " + list.capacity());
	console.log("Esta vacía: " + list.isEmpty());
	console.log("Esta llena: " + list.isFull());
 	console.log("Longitud: " + list.sizeList());

	var persona1 = new Person ("andres", "Ruiz");
	var persona2 = new Person ("alba", "cuevas");
	var persona3 = new Person ("Carolina", "Cortes");
	var persona4 = new Person ("Sandra", "Sanchez");
	var persona5 = new Person ("Maria", "Curie");
	var persona6 = new Person ("Neville", "Longboton");
	var persona7 = new Person ("Pamela", "Claro");
	var persona8 = new Person ("Harry", "Potter");
	var persona9 = new Person ("Sony", "Vegas");
    
	list.addPerson(persona1);
	list.addPerson(persona2);
	list.addPerson(persona3);
	list.addPerson(persona4);
    list.addPerson(persona5);

 	console.log ("The full list: " + list.toString());	 	
 	console.log ("The first person list: " + list.toStringPerson(list.firstPerson()));
 	console.log ("The last person list: " + list.toStringPerson(list.lastPerson()));
	 		 	
 	//clear(list);

	console.log ("Prueba de remove: " + list.remove(2));
	console.log ("Lista despues de remove: " + list.toString());
	console.log ("Prueba de removePerson: " + list.removePerson(persona1));
	console.log ("Lista despues de removePerson: " + list.toString());
	console.log ("Prueba de indexOf: " + list.indexOf(persona3));
	console.log ("Prueba de lastindexOf: " + list.lastindexOf(persona2));
	console.log ("Lista despues de index and lastindex: " + list.toString());
    console.log ("Prueba de addPerson: " + list.addPerson(persona9));
	console.log ("Lista despues de addPerson: " + list.toString(list));
	console.log ("Prueba de get: " + list.toStringPerson(list.get(3)));	
 } 
window.onload = testlist;