import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAccountModel1627031554751 implements MigrationInterface {
    name = 'CreateAccountModel1627031554751'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "transaction_status_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "sender_account" character varying NOT NULL, "beneficiary_account" character varying NOT NULL, "description" character varying NOT NULL, "amount" double precision NOT NULL, "currency" character varying NOT NULL, "status" "transaction_status_enum" NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TYPE "transaction_status_enum"`);
    }

}
