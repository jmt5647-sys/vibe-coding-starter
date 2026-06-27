DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '장민태',
  '부산대 경영학과 및 IBA',
  '투수 / 지명타자',
  '17번',
  '부산대 경영학과와 데이터 분석 동아리 IBA에서 배우고 성장하고 있습니다.',
  '안녕하세요, 장민태입니다. 생년월일은 2004/10/19이고 러닝을 좋아하며, 탄이라는 이름의 검정 시바견을 키우고 있습니다.',
  '/images/jang-mintae.jpg'
);

INSERT INTO highlights (label) VALUES
  ('끈기'),
  ('침착함');
