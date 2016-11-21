#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER dinnerplan;
    CREATE DATABASE dinnerplan;
    GRANT ALL PRIVILEGES ON DATABASE dinnerplan TO dinnerplan;
    \connect dinnerplan dinnerplan;

    CREATE TABLE recipes (
        id integer NOT NULL,
        name text,
        season text,
        created_at timestamp with time zone NOT NULL,
        updated_at timestamp with time zone NOT NULL,
        deleted_at timestamp with time zone
    );

    CREATE SEQUENCE recipes_id_seq
        START WITH 1
        INCREMENT BY 1
        NO MINVALUE
        NO MAXVALUE
        CACHE 1;

    ALTER SEQUENCE recipes_id_seq OWNED BY recipes.id;

    ALTER TABLE ONLY recipes ALTER COLUMN id SET DEFAULT nextval('recipes_id_seq'::regclass);

    ALTER TABLE ONLY recipes
        ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);

    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (1,E'Macaroni Jambon Fromage',E'Hiver',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (2,E'Lasagne bolognaise',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (3,E'Lasagne végétarienne',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (4,E'Pâtes carbonara',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (5,E'Tomate/poivron/courgette farcie',E'Automne/Hiver',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (6,E'Poisson-purée',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (7,E'Couscous',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (8,E'Pizza',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (9,E'Wok',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (10,E'Croque Monsieur',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (11,E'Hamburger maison',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (12,E'Cannelloni ricotta épinards',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (13,E'Quiche lorraine',E'Automne/Hiver',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (14,E'Quiche - produits de saison',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (15,E'Omelette aux Légumes',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (16,E'Boulettes sauce tomate-frites',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (17,E'Boulettes sauce curry',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (18,E'Poulet curry/lait de coco-riz',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (19,E'Salade Poulet Hawai',E'Printemps/Été',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (20,E'Salade grecque',E'Printemps/Été',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (21,E'Tomate crevette',E'Printemps/Été',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (22,E'Pomme de terre en salade',E'Printemps/Été',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (23,E'Pêches au thon',E'Printemps/Été',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (24,E'Brochettes de Poulet et Pommes Croquettes',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (25,E'Sushi',E'Toutes saisons',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (26,E'Feuilleté Chèvre et Saumon Fumé',E'Printemps/Été',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (27,E'Hachis parmentier',E'Automne/Hiver',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (28,E'Reblochon',E'Hiver',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (29,E'Raclette',E'Hiver',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (30,E'Stoemp Épinard et Saucisse',E'Hiver',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (31,E'Moussaka',E'Automne/Hiver',E'2016-11-21',E'2016-11-21',NULL);
    INSERT INTO "recipes"("id","name","season","created_at","updated_at","deleted_at") VALUES (32,E'Gratin Dauphinois et Steack',E'Automne/Hiver',E'2016-11-21',E'2016-11-21',NULL);

EOSQL
