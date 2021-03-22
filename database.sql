--- db name: weekend-to-do-list ---

CREATE TABLE "to_do_list"(
    "id" serial primary key,
    "task" varchar(200),
    "completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "to_do_list" ( "task" ) VALUES ( '', '' );
DELETE FROM "to_do_list" WHERE ( "id", "task", "completed", )= '' ;
SELECT * FROM "to_do_list";