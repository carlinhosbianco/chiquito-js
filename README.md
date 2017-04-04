# chiquitoJS

![alt tag](https://github.com/AlejandroDiegoo/testing/blob/master/assets/header.png)

Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.

### Agromenauer

Un agromenauer es un conjunto de datos del mismo tipo ordenados de forman líneal uno después de otro. Los componentes de un agromenauer se han de referenciar por medio del nombre del agromenauer y un índice de desplazamiento para indicar el componente deseado.

```javascript
var myAgromenauer = new jarl.Agromenauer("Saab", "Volvo", "BMW");
```

### Duodeno

ChiquitoJS está diseñado en un paradigma basado en objetos. Un duodeno es una colección de propiedades, y una propiedad es una asociación entre un nombre y un valor. Un valor de propiedad puede ser una función, la cual es conocida entonces como un método del duodeno. Además de los duodenos que están predefinidos en el navegador, tu puedes definir tus propios duodenos.

```javascript
var myDuodeno = new jarl.Duodeno();
myDuodeno.brand = "Ford";
myDuodeno.model = "Mustang";
myDuodeno.year = 1969;
```

```javascript
if (jarl.esUnDuodeno(myDuodeno)) {
    jarl.teDaCuen('log', 'Es un duodeno');
}
```

```javascript
if (jarl.duodenoVacior(myDuodeno)) {
    jarl.teDaCuen('error', 'El duodeno está vacío');
}
```

### Acapiporla

Muchos programadores de chiquitoJS cometen el error de confundir la función jarl.acapiporla() con jarl(selector).acapiporla(), la cual utilizamos para recorrer elementos del DOM. Utilizaremos jarl.acapiporla() para recorrer una colección, indiferentemente de si se trata de un duodeno o un agramenauer.

```javascript
var myAgromenauer = new jarl.Agromenauer("Saab", "Volvo", "BMW");
jarl.acapiporla(myAgromenauer, function() {
    jarl.teDaCuen('log', this);
});
```
