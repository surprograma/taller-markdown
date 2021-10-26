# Markdown

Cómo armar **documentos** y **presentaciones** sin _editores complicados_.

![Logo](img/logo-redondeado.png) &nbsp; &nbsp; ![Logo UnaHur](img/unahur-informatica-logo.png)

===

<!-- TODO: alguna encuesta inicial con Menti -->

===

## WYSIWYG

Probablemente nuestro primer acercamiento a la computadora... <!-- .element: class="fragment" -->

🇺🇲 _What you see is what you get_

<!-- .element: class="fragment" -->

🇦🇷 _Lo que ves es lo que obtienes_

<!-- .element: class="fragment" -->

Con **algo de suerte**, lo que vemos es lo que obtendremos cuando haya que publicarlo.

<!-- .element: class="fragment" -->

--

Básicamente, **contenido** y **formato** son una misma cosa.

![](img/writer.png)

--

Seguramente muchas, sino todas, las herramientas que utilizan a diario funcionan con este paradigma:

- Microsoft Word,
- Microsoft PowerPoint,
- Google Docs,
- LibreOffice Writer.

Aunque se pueden hacer algunas cosas con el teclado, suelen estar diseñadas dándole prioridad al uso del _mouse_. 🖱️

--

| Ventajas                                | Desventajas                                                 |
| --------------------------------------- | ----------------------------------------------------------- |
| Baja curva de aprendizaje.              | Cuesta bastante lograr consistencia.                        |
| Ampliamente difundidas.                 | Incompatibilidades entre distintas versiones.               |
| Se pueden lograr diseños muy complejos. | Hacer modificaciones puede fácilmente "descompaginar" todo. |

===

## Texto plano

Cuenta la leyenda que allá lejos y hace tiempo, el _mouse_ no existía y las computadoras se manejaban **únicamente con el teclado**. 😲 ⌨️

Lógicamente, las interfaces de usuarix **se basaban en texto**, y "la máquina" estaba mucho más presente en lo que hacíamos.

--

A quienes programamos (aunque eso también se va desdibujando), nos es habitual la idea de que editamos **código fuente** y que luego eso _se transforma_ en algún tipo de **resultado** que la computadora puede interpretar.

```plantuml
!$BGCOLOR = "transparent"
!theme plain

hide empty members

skinparam state {
  StartColor MediumBlue
  EndColor Red
}

[*] -right-> Compilación
Compilación -right-> [*]
```

A ese proceso de transformación lo llamamos **compilación**.

--

Ese código fuente, lógicamente, debe estar escrito en algún lenguaje con reglas rígidas para poder ser transformado por un programa.

Y acá entra **Markdown**: un lenguaje _de marcado_, que sirve para escribir documentos y varias cosas más.

--

Como **ejemplo**, este es el `código` que genera la diapositiva que estamos viendo ahora:

![magia](img/magia.png)

_Parece magia, pero en realidad es sencillo..._ 🤯

--

Se puede usar en cualquier dispositivo y transmitir por cualquier medio. Un `.txt` es texto plano, un mensajito de WhatsApp también (emojis incluidos).

--

Como ejemplo, esto veía cuando empecé a armar estas diapositivas.

![sarmiento](img/sarmiento.jpg)

--

| Ventajas                                           | Desventajas                                                          |
| -------------------------------------------------- | -------------------------------------------------------------------- |
| El estilo será siempre consistente.                | Hay que aprenderse la sintaxis.                                      |
| Hay miles de herramientas distintas para editarlo. | Puede ser complejo encontrar otras personas que quieran incursionar. |
| La simplicidad es una decisión de diseño.          | Para lograr diseños más complejos hay que acudir a extensiones.      |

===

## Sintaxis

```markdown
# Machete

## Formato básico

Con dos asteriscos se ponen **negritas**, con un guión bajo _cursivas_.
También se pueden usar "acentos torcidos" para `texto monoespaciado`.

## Listas

- Sin numerar...
- ...se hacen con...
- ...un guión o un asterisco.

1. Numeradas es con...
2. ...el número seguido de...
3. ...un punto.
```

--

![](img/sintaxis/basica.png)

--

<!-- TODO: extendido con emojis -->

<!-- TODO: extendido con matemática, diagramas, etc -->

===

<div class="titulo-logo">

![](img/hedgedoc.png)

## HedgeDoc

</div>

Editor colaborativo libre, con instancias públicas.

--

Algunas de las cosas que la herramienta permite:

- 🧑‍🏫 Armar **diapositivas**.
- 🖨️ **Exportar** a PDF.
- 👥 Escribir **colaborativamente** (tipo Google Docs).
- 📎 **Publicar** el resultado con un enlace: para una consigna, enunciado, etc.

--

Para este taller, estamos usando una instancia pública de un colectivo campesino colombiano llamado **Tupale**.

> La palabra Tupale significa hágale pues - hágalo con decisión.
> En esta metáfora, Tupale.co es una barca para navegar el proceso de adopción tecnológica, de adopción digital, para la producción de herramientas y productos digitales.

🗒️ Vale la pena [leer el manifiesto completo](https://docutopia.tupale.co/s/HJ_IZz1TQ).

===

<div class="titulo-logo">

![](img/zettlr.png)

## Zettlr

</div>

Editor libre, que funciona sin conexión a internet.

--

Algunas de las cosas que la herramienta permite:

- 🧑‍🏫 Armar **diapositivas**.
- 🖨️ **Exportar** a PDF, Word, OpenDoc y varios formatos más.
- 🔎 **Buscar y vincular** notas, basado en el sistema _Zettelkasten_.
- 🖋️ Administrar citas para **escritura académica**.

===

## 🦾 Manos a la obra

<!-- TODO: ejercicio 1 - armar un PDF o un texto para publicar... tema libre -->

===

## Diapositivas

<!-- TODO: contar cómo se hacen, con los ---, que se usa Reveal y cómo verlas -->

===

## 🦾 Manos a la obra

<!-- TODO: ejercicio 2 - armar diapositivas... ¿qué aprendiste de MD? -->

===

## Herramientas que soportan Markdown

Que tal vez ya usaste y no sabías.

--

### GitHub

Se puede usar en el _README_, en las _issues_, en la _wiki_ y prácticamente en cualquier lugar donde se permite poner texto.

--

### Moodle

Soporte nativo, puede utilizarse en los mismos lugares donde típicamente aparece el editor HTML.

![](img/herramientas/moodle.png) <!-- .element: style="width: 60%" -->

Hay posibilidad de agregar un editor más simpático con un plugin ([Marklar](https://moodle.org/plugins/editor_marklar)).

--

### Discord

Soporta todas las funcionalidades, excepto los enlaces.

--

### Otras herramientas

- **Cryptpad:** notas y diapositivas.
- **Nextcloud:** notas.
- **VSCode:** editor de texto para programación.
- **Markor:** notas para Android.

===

<!-- TODO: alguna encuesta final con Menti... qué aprendiste, para qué lo usarías, etc -->

===

# ¿Preguntas?

<div class="red-social">
  <i class="fab fa-youtube color"></i>
  <span><a href="https://youtube.com/c/elsurtambienprograma">El Sur también programa</a></span>
</div>
<div class="red-social">
  <i class="fab fa-telegram-plane color"></i>
  <span><a href="https://t.me/surprograma">@surprograma<a></span>
</div>
<div class="red-social">
  <i class="fab fa-instagram color"></i>
  <span><a href="https://instagr.am/surprograma">@surprograma<a></span>
</div>

![Logo](img/logo-redondeado.png) &nbsp; &nbsp; ![Logo UnaHur](img/unahur-informatica-logo.png)