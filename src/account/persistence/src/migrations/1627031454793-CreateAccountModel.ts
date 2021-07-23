import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAccountModel1627031454793 implements MigrationInterface {
    name = 'CreateAccountModel1627031454793'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "requisite" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "balance" double precision NOT NULL, "account_number" character varying NOT NULL, "currency" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "account_id" uuid, CONSTRAINT "UQ_dcacf648619a181b71a8467f27a" UNIQUE ("balance"), CONSTRAINT "PK_132f898a16bd63d9ff431db5844" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "account_status_enum" AS ENUM('0', '1', '2', '3')`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "password" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "last_session" TIMESTAMP NOT NULL DEFAULT now(), "status" "account_status_enum" NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "birthdayDate" TIMESTAMP NOT NULL, "birthdayConfirmed" boolean NOT NULL, "emailAddress" character varying NOT NULL, "emailConfirmed" boolean NOT NULL, CONSTRAINT "UQ_eab9b90a0981b3355d1ca328cf4" UNIQUE ("emailAddress"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "requisite" ADD CONSTRAINT "FK_a99a069878fa20e19b28914e182" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requisite" DROP CONSTRAINT "FK_a99a069878fa20e19b28914e182"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TYPE "account_status_enum"`);
        await queryRunner.query(`DROP TABLE "requisite"`);
    }

}
