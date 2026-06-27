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
  '부산대학교 경영학과에 재학 중인
장민태입니다.

데이터 분석 동아리에서 Python을 활용한 데이터 분석을 공부하고 있습니다. 결과를 해석하는 것뿐만 아니라, 데이터를 직접 다루고 다양한 인사이트를 탐색하는 과정에 흥미를 느낍니다. 이를 바탕으로 가설을 검증하고 분석 역량을 키우고 있습니다.

러닝을 좋아하며, 탄이라는 이름의 검정 시바견을 키우고 있습니다.',
  '/images/jang-mintae.jpg'
);

INSERT INTO highlights (label) VALUES
  ('끈기'),
  ('침착함');
