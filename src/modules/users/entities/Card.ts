import {
    Column,
    Entity,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { User } from "./User";

@Entity()
class Card {
    @PrimaryColumn()
    id?: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user_id: string;

    @Column()
    bank: string;

    @Column()
    is_used: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default { Card };
