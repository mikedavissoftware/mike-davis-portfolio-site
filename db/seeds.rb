# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Project.create(
  project_name: "",
  url: "",
  client: "",
  client_url: "",
  summary: "",
  description: ""
)

Contributor.create(
  name: "",
  url: "",
  image: ""
)

Skill.create(
  name: ""
)

Contribution.create(
  description: "",
  project_id: 0,
  contributor_id: 0,
  skill_id: 0
)