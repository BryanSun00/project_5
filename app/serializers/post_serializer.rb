class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :tag, :comment
  has_one :user
  has_many :comments
end
