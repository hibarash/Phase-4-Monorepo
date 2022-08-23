class SignupShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :sport_name

  def name
    object.user.name
  end
  def sport_name
    object.league.sport_name
  end


end
