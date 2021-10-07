export async function up(knex: any): Promise<void> {
  await knex.schema.createTable(
    'posts',
    (table: {
      specificType: (
        arg0: string,
        arg1: string
      ) => { (): any; new (): any; primary: { (): void; new (): any } };
      string: (
        arg0: string,
        arg1: number
      ) => {
        (): any;
        new (): any;
        notNullable: {
          (): { (): any; new (): any; unique: { (): void; new (): any } };
          new (): any;
        };
      };
      text: (arg0: string) => void;
      boolean: (arg0: string) => {
        (): any;
        new (): any;
        notNullable: {
          (): {
            (): any;
            new (): any;
            defaultTo: { (arg0: boolean): void; new (): any };
          };
          new (): any;
        };
      };
      timestamp: (arg0: string) => {
        (): any;
        new (): any;
        notNullable: {
          (): {
            (): any;
            new (): any;
            defaultTo: { (arg0: any): void; new (): any };
          };
          new (): any;
        };
      };
    }) => {
      table.specificType('id', 'CHAR(16)').primary();
      table.string('slug', 60).notNullable().unique();
      table.string('title', 80).notNullable();
      table.text('content');
      table.boolean('published').notNullable().defaultTo(false);
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').notNullable();
    }
  );
}

export async function down(knex: any): Promise<void> {
  await knex.schema.dropTable('posts');
}
