
User.create(
  username: "admin",
  password: "password"
)

Project.create(
  name: "Monsters Are People",
  image: "",
  url: "https://open.spotify.com/track/7ei3aH15pQJPWb2XlqNRxM?si=7ee773a751aa413e",
  client: "Chess at Breakfast",
  client_url: "https://open.spotify.com/artist/3qDNRekmsW3Fk49pqmp5Hk?si=2qV2xpVTSRGqawg2dtQl4g",
  summary: "",
  description: ""
)

SkillType.create(name: "Software & Web Development")
SkillType.create(name: "Music & Audio Production")
SkillType.create(name: "Video Production")
SkillType.create(name: "Photo & Graphic Design")
SkillType.create(name: "Entrepreneurship")
SkillType.create(name: "Marketing & Outreach")

Skill.create(
  name: "",
  skill_type_id: ""
)

Contribution.create(
  description: "",
  project_id: 0,
  skill_id: 0
)