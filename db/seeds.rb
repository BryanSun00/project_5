User.destroy_all
Post.destroy_all
Comment.destroy_all
bryan = User.create(name: "Bryan", username: "bryansun", password: "123", image: Faker::LoremFlickr.image )

10.times {User.create(name: Faker::Name.name , username: Faker::FunnyName.name , password: "12345"  ,  image: Faker::LoremFlickr.image )}
5.times {Post.create(name: Faker::Name.name, description: Faker::Lorem.sentence, image: Faker::LoremFlickr.image, tag: "testing", user: User.all.sample )}
10.times {Comment.create(post: Post.all.sample, user_comment: Faker::Lorem.sentence, user: User.all.sample )}
10.times {Like.create(post: Post.all.sample, user: User.all.sample)}