CREATE TABLE accounts (
  user_name varchar(64) NOT NULL,
  password_hash varchar(64) NOT NULL
);

INSERT INTO accounts (user_name, password_hash) VALUES ('hung', 'hashed_password');

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "PK_account_id" PRIMARY KEY (user_name);