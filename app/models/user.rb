class User < ApplicationRecord
    has_secure_password
    
    has_many :signups
    has_many :leagues, through: :signups
    has_many :user_teams
    has_many :teams, through: :user_teams 

    

   ## validate user and password
end