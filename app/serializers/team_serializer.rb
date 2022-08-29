class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :league_id
  has_one :league

end
