# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Location.destroy_all
User.destroy_all
Bleat.destroy_all

# locations
ldn = Location.create!(name: 'London, England')
pa = Location.create!(name: 'Pennsylvania, USA')
va = Location.create!(name: 'Virginia, USA')
ma = Location.create!(name: 'Massachusetts, USA')
ca = Location.create!(name: 'California, USA')
tn = Location.create!(name: 'Tennessee, USA')
cdmx = Location.create!(name: 'Mexico City, Mexico')

# users
lovelace = User.create!(email: "Ada Lovelace", location_id: ldn.id, password: 'starwars')
hopper = User.create!(email: "Grace Hopper", location_id: pa.id, password: 'starwars')
vaughan = User.create!(email: "Dorothy Vaughan", location_id: va.id, password: 'starwars')
turing = User.create!(email: "Alan Turing", location_id: ldn.id, password: 'starwars')
booth = User.create!(email: "Kathleen Booth", location_id: ldn.id, password: 'starwars')
landin = User.create!(email: "Peter Landin", location_id: ldn.id, password: 'starwars')
hamilton = User.create!(email: "Margaret Hamilton", location_id: ma.id, password: 'starwars')
stallman = User.create!(email: "Richard Stallman", location_id: ma.id, password: 'starwars')
horton = User.create!(email: "Mary Ann Horton", location_id: ca.id, password: 'starwars')
dean = User.create!(email: "Mark Dean", location_id: tn.id, password: 'starwars')
lam = User.create!(email: "Monica Lam", location_id: ca.id, password: 'starwars')
de_icaza = User.create!(email: "Miguel de Icaza", location_id: cdmx.id, password: 'starwars')

# bleats
c0 = Bleat.create!(
  body: "who is screaming \"log off\" at my house. show yourself, coward. i will never log off",
  author_id: lovelace.id
)
c1 = Bleat.create!(
  body: "hear this trolls: ive been secretly respecting the flag in the privacy of my garage for 12 hrs a day , maxing out its power to insane levels",
  author_id: hopper.id
)
c2 = Bleat.create!(
  body: "every morning I ask the dog \“the usual?\” before pouring her food into her bowl & neither of us thinks it’s funny but that’s showbiz baby",
  author_id: vaughan.id
)
c3 = Bleat.create!(
  body: "How dare you drive the speed limit when I’m late to something due to my own poor time management skills",
  author_id: turing.id
)
c4 = Bleat.create!(
  body: "it is with a heavy heart that i must announce that the celebs are at it again",
  author_id: booth.id
)
c5 = Bleat.create!(
  body: "Food $200\nData $150\nRent $800\nCandles $3,600\nUtility $150\nsomeone who is good at the economy please help me budget this. my family is dying",
  author_id: landin.id
)
c6 = Bleat.create!(
  body: "passed a dog wearing a vest that said \“careful! i’m still learning how to be around people\” and experienced a borderline-spiritual \“same\”",
  author_id: hamilton.id
)
c7 = Bleat.create!(
  body: "hi, grandma? can u come pick me up from my rap battle? it's over. no, i lost. he saw u drop me off & did a pretty devastating rhyme about it",
  author_id: stallman.id
)
c8 = Bleat.create!(
  body: "is there anything more capitalist than a peanut with a top hat, cane, and monocle selling you other peanuts to eat",
  author_id: horton.id
)
c9 = Bleat.create!(
  body: "[burglar gently waking me] you live like this?",
  author_id: dean.id
)
c10 = Bleat.create!(
  body: "How Can Mirrors Be Real If Our Eyes Aren't Real",
  author_id: lam.id
)
c11 = Bleat.create!(
  body: "awfully bold of you to fly the Good Year blimp on a year that has been extremely bad thus far",
  author_id: de_icaza.id
)