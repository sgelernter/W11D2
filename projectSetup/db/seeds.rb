# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo1 = {title: 'wash car', body: 'with soap', done: false}
todo2 = {title: 'wash dog', body: 'with consent', done: true}
todo3 = {title: 'wash house', body: 'with paint', done: false}

Todo.create(todo1)
Todo.create(todo2)
Todo.create(todo3)