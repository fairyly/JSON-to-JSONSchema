// Modules
const Type = require('type-of-is')

// $schema
const DRAFT = 'http://json-schema.org/draft-04/schema#'


// 
function getPropertyType(value) {
  let type = Type.string(value).toLowerCase()

  if (type === 'number') return Number.isInteger(value) ? 'integer' : type
  if (type === 'date') return 'string';
  if (type === 'regexp') return 'string';
  if (type === 'function') return 'string';

  return type;
}

// 如果传入的是对象，处理对象，返回结果
function processObject(object, output, nested) {
  let arr = []
  for (let key in object.properties) {
    let value = object.properties[key]; // 拿到相当于数组的一列数据
    // 如果这一行数据的 type 是 object
    if (value.type == 'object') {
      value.children = [];
      value.children = processObject(value);
      arr.push(value)
      continue
    }
    // 如果这一行数据的 type 是 array
    if (value.type == 'array') {
      value.children = [];
      value.children = processObject(value.items);
      arr.push(value)
      continue
    }
    arr.push(value)
  }
  return arr;
}

// json 数组转 JSON Schema
function processArrObj(object) {

  return 
}

// 如果传入的是数组，处理数组，返回 JSON schema
function processArray(array, output, nested) {
  if (output) {
    output.properties = output.properties || {}
  }
  for (let i = 0; i <= array.length-1; i++) {
    if (array[i].children.length) {
      array[i].type == 'object';
      array[i].properties = {};
      array[i].properties = processArray(array[i].children, {});
      output.properties[array[i].currentKey] = array[i];
      continue;
    }
    
    output.properties[array[i].currentKey] = array[i];
  }
  return output;
}

module.exports = function Process (currentKey, importData) {
  let processOutput
  let output = {
    $schema: DRAFT
  }

  // 判断传入的 currentKey 是否存在
  if (typeof currentKey !== 'string') {
    importData = currentKey
    currentKey = undefined
  } else {
    output.currentKey = currentKey
  }

  // 设置传入的 importData 的类型
  output.type = Type.string(importData).toLowerCase()

  // 如果是对象，就去处理成数组
  if (output.type === 'object') {
    output = processObject(importData)
  }
  
  // 如果是数组，就去处理成 JSON schema 对象
  if (output.type === 'array') {
    output = processArray(importData, {});
    output.type = 'object';
  }

  // Output
  return output
}
