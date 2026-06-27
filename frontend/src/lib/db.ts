import Database from "better-sqlite3";
import path from "node:path";

export type Profile = {
  id: number;
  name: string;
  team: string;
  position: string;
  uniform_number: string;
  tagline: string;
  introduction: string;
  image_path: string;
};

export type Highlight = {
  id: number;
  label: string;
};

const dbPath = path.join(process.cwd(), "local.db");

const defaultProfile: Profile = {
  id: 1,
  name: "장민태",
  team: "부산대 경영학과 및 IBA",
  position: "투수 / 지명타자",
  uniform_number: "17번",
  tagline:
    "부산대 경영학과와 데이터 분석 동아리 IBA에서 배우고 성장하고 있습니다.",
  introduction:
    "부산대학교 경영학과에 재학 중인\n장민태입니다.\n\n데이터 분석 동아리에서 Python을 활용한 데이터 분석을 공부하고 있습니다. 결과를 해석하는 것뿐만 아니라, 데이터를 직접 다루고 다양한 인사이트를 탐색하는 과정에 흥미를 느낍니다. 이를 바탕으로 가설을 검증하고 분석 역량을 키우고 있습니다.\n\n러닝을 좋아하며, 탄이라는 이름의 검정 시바견을 키우고 있습니다.",
  image_path: "/images/jang-mintae.jpg",
};

const defaultHighlights: Highlight[] = [
  { id: 1, label: "끈기" },
  { id: 2, label: "침착함" },
];

function getDb() {
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      team TEXT NOT NULL,
      position TEXT NOT NULL,
      uniform_number TEXT NOT NULL,
      tagline TEXT NOT NULL,
      introduction TEXT NOT NULL,
      image_path TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS highlights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL
    );
  `);

  return db;
}

export function getProfile() {
  try {
    const profile = getDb()
      .prepare(
        "SELECT id, name, team, position, uniform_number, tagline, introduction, image_path FROM profile ORDER BY id LIMIT 1",
      )
      .get() as Profile | undefined;

    return profile ?? defaultProfile;
  } catch (error) {
    console.error(error);
    return defaultProfile;
  }
}

export function getHighlights() {
  try {
    const highlights = getDb().prepare("SELECT id, label FROM highlights ORDER BY id").all() as Highlight[];

    return highlights.length > 0 ? highlights : defaultHighlights;
  } catch (error) {
    console.error(error);
    return defaultHighlights;
  }
}
