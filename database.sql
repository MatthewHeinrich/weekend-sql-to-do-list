--- db name: weekend-to-do-list ---

CREATE TABLE "to_do_list"(
    "id" serial primary key,
    "task" varchar(200),
    "completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "to_do_list" ( id, task, completed ) VALUES ( '', '' );
SELECT * FROM "to_do_list";