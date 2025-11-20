# University Management System – OOP in JavaScript

![Project Diagram](asset/diagram.png)

## Overview

This project is a University Management System built using Object-Oriented Programming principles in JavaScript. It models real-world entities such as people, vehicles, accidents, and locations using classes and relationships.

## Key Concepts

- Encapsulation
- Inheritance
- Composition
- Association

## Class Structure

| Class       | Description                                    |
| ----------- | ---------------------------------------------- |
| Address     | Stores location details                        |
| Contact     | Holds phone and email information              |
| Person      | Represents individuals with name and birthdate |
| Description | Contains textual details                       |
| Location    | Geographic coordinates with Address            |
| Accident    | Records date and time of incidents             |
| Vehicle     | Vehicle details                                |
| Injury      | Describes injury severity and notes            |
| Subject     | Aggregates Person, Vehicle, and Injury         |
| Involved    | Connects a Subject to an Accident              |

## Example Usage

```JavaScript
const address = new Address("1", "123 Main St", "Atlanta", "GA", "30301");
const contact = new Contact("1", "555-1234", "john@example.com", address);
const person = new Person("1", "John", "Doe", new Date("1990-01-01"), address, contact);
const vehicle = new Vehicle("1", "Toyota", "Camry", 2020, "ABC123");
const injury = new Injury("1", "Moderate", "Bruised arm");
const subject = new Subject("1", person, vehicle, injury);
```

## Future Enhancements

- Add database persistence
- Add frontend UI
- Implement search features
- Add unit tests

## License

MIT License
