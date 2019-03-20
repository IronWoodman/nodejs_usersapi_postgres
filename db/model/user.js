import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity
export class User {

    @Column
    id: number;


    // constructor(id, name, age) {
    //     this.id = id;
    //     this.name = name;
    //     this.age = age;
    // }
}