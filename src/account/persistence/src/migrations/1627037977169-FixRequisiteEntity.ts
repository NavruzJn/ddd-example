import {MigrationInterface, QueryRunner} from "typeorm";

export class FixRequisiteEntity1627037977169 implements MigrationInterface {
    name = 'FixRequisiteEntity1627037977169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requisite" DROP CONSTRAINT "UQ_dcacf648619a181b71a8467f27a"`);
        await queryRunner.query(`ALTER TABLE "requisite" ADD CONSTRAINT "UQ_6dfe43961c9b31fbc8dd66157bc" UNIQUE ("account_number")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requisite" DROP CONSTRAINT "UQ_6dfe43961c9b31fbc8dd66157bc"`);
        await queryRunner.query(`ALTER TABLE "requisite" ADD CONSTRAINT "UQ_dcacf648619a181b71a8467f27a" UNIQUE ("balance")`);
    }

}
