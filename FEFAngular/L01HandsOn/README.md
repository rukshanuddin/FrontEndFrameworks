# L01HandsOn

## Deliverables

- an `interface` called `Person` that contains the following properties:
  - `firstName` property of _type_ `string` that is **_required_**
  - an **_optional_** `lastName` property of type `string`
- a second `interface` named `Contact` that contains the following properties:
  - a `phoneNumber` property of type `number` that is **_required_**.
  - an **_optional_** email property of type `string`.
- a `class` named `ContactCard` that `implements` both the `Person` and `Contact` interfaces.
- a constructor in the `ContactCard` class that uses both the `firstName` and `phoneNumber` fields.
  - define types of `firstName` and `phoneNumber` within `ContactCard`.
- method named `sendMessage` in the `ContactCard` class.
- `console.log` in `sendMessage` method that sends a message to the console that uses `firstName` and `phoneNumber`.
- a new instance of `ContactCard` and set it to the variable name of `newPerson`.
  - `firstName` and `phoneNumber` fields as `"Henry"` and `1234567890`
- Using the `newPerson` instance, call the `sendMessage` method.
