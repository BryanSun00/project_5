class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_comment, :user_name
  has_one :user
  has_one :post
end
