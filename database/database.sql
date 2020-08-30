Create database ng_games_db;

Use ng_games_db;

Create Table Games(
                    id Int(11) Not Null AUTO_INCREMENT Primary Key,
                    title Varchar(180),
                    description Varchar(255),
                    image Varchar(300),
                    created_at Timestamp Default CURRENT_TIMESTAMP
                  );

Describe Games;