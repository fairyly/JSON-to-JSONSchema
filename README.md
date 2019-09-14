# JSON-to-JSONSchema

>Convert JSON  to  JSON Schema


## Install

>仅用于内部，不发布

```
// npm install json-to-jsonschema -S
```


## Usage

```

```


## Dependencies

- type-of-is: JavaScript 类型检测

or

- is-type-of： Node 中类型检测

```
npm i type-of-is -S

or

npm i is-type-of -S
```



### type-of-is

```
var Type = require('type-of-is');
 
// Type.of(arg) and Type(one_argument) return constructor of type
console.log(Type.of('hi there ok'));  // [Function: String]
console.log(Type.of(342));            // [Function: Number]
console.log(Type.of({}));             // [Function: Object]
console.log(Type.of([1, 2, 3]));      // [Function: Array]
console.log(Type.of(null));           // null
console.log(Type.of(undefined));      // undefined
console.log(Type(true));              // [Function: Boolean]
console.log(Type(function () {}));    // [Function: Function]
console.log(Type(/abcd/));            // [Function: RegExp]
console.log(Type(new Date()));        // [Function: Date]
console.log(Type(new Error()));       // [Function: Error]
 
// Type.string(arg) returns the string name of constructor
console.log(Type.string('hi there ok'));  // "String"
console.log(Type.string(342));            // "Number"
console.log(Type.string({}));             // "Object"
console.log(Type.string([1, 2, 3]));      // "Array"
console.log(Type.string(null));           // "null"
console.log(Type.string(undefined));      // "undefined"
console.log(Type.string(true));           // "Boolean"
console.log(Type.string(function () {})); // "Function"
console.log(Type.string(/abcd/));         // "RegExp"
console.log(Type.string(new Date()));     // "Date"
console.log(Type.string(new Error()));    // "Error"
 
// Type.is(object, type) and Type(object, type) tests object type
console.log(Type.is(true, Boolean));      // true
console.log(Type.is("1231", Number));     // false
console.log(Type.is("1231", String));     // true
console.log(Type.is("1231", "String"));   // true
console.log(Type.is("1231", Object));     // false
console.log(Type([], Object));            // false
console.log(Type({}, Object));            // true
console.log(Type([], Array));             // true
console.log(Type(new Date(), Date));      // true
console.log(Type(new Date(), Object));    // false
 
var s = "hihihi";
var Stringy = Type.of(s);
var t = new Stringy("hihihi");
console.log((s == t));                    // true
console.log((s === t));                   // false
```

### is-type-of

```
var is = require('is-type-of');

is.array([1]); // => true
is.primitive(true); // => true
is.primitive({}); // => false
is.generatorFunction(function * () {}); // => true
is.long(Math.pow(2, 33)); // => true
is.double(0); // => false
```


## License

[MIT]()
