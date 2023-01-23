class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_comment
  has_one :user
  has_one :post
end
