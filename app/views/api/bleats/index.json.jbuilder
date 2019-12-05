# json.array! @bleats, :id, :body
json.bleats do
  @bleats.each do |bleat|
    json.set! bleat.id do
      # json.id bleat.id
      # json.body bleat.body
      # json.extract! bleat, :id, :body
      json.partial! "bleat", bleat: bleat
    end
  end
end

json.users do
  # User.all.each do |user|
  @bleats.each do |bleat|
    json.set! bleat.author_id do
      json.id bleat.author_id
      json.email bleat.author.email
    end
  end
end

# compare: has_many :bleats -> has_many(:bleats)

=begin
We want:
  {
    1: {
      id: 1,
      body: 'bleat1'
    },
    2: {
      id: 2,
      body: 'bleat2'
    }
  }

  Use jbuilder API to set keys and values
=end