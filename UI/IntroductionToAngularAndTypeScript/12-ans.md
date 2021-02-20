## Review Quiz

### Below is the answers to the [quiz](./12.md#Review).

1.  The following is valid for defining a `class` that adheres to an `interface`.

    ~~A. True~~

    **B. False**

```ts
interface Animal {

    species: string;

}

class Dog as Animal {

}
```

2.  The following is valid for defining a class `Dog` that implements the `Animal` interface.

    ~~A. True~~

    **B. False**

```ts
interface Animal {
  species: string;
}

class Dog implements Animal {}
```

3.  You can define methods (class functions) in an interface.

    **A. True**

    ~~B. False~~

4.  Classes can implement multiple interfaces.

    **A. True**

    ~~B. False~~

5.  Which statement below is valid for implementing multiple interfaces?

    ~~A. `class Accountant implements Employee implements Salaried;`~~

    ~~B. `class Accountant: Employee Salaried;`~~

    **C. `class Accountant implements Employee, Salaried;`**

    ~~D. `class Accountant implements Employee: Salaried`~~

[Back to Lesson 12](./12.md)

[Next Lesson](./13.md)

[Table of Contents](./README.md)

[Previous Lesson](./11.md)
