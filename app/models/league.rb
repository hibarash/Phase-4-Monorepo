class League < ApplicationRecord
    has_many :signups
    has_many :teams
    has_many :users, through: :signups
    has_many :user_teams, through: :teams
end
