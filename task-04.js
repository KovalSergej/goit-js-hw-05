"use strict";

class StringBuilder {
  constructor(val) {
    this._value = val;
  }

  get value() {
    return this._value;
  }

  append(val) {
    this._value = this._value + val;
    return this._value;
  }

  prepend(val) {
    this._value = val + this._value;
    return this._value;
  }

  pad(val) {
    this._value = val + this._value + val;
    return this._value;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
