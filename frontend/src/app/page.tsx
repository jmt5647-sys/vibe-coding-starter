import Image from "next/image";
import { getHighlights, getProfile } from "@/lib/db";

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      {/* 자기소개 전체 화면: 학생들이 이름, 소속, 설명을 바꿔보는 첫 실습 영역 */}
      <section className="mx-auto max-w-[1200px] px-5 py-5 sm:px-8 lg:px-10">
        <header className="sticky top-0 z-10 -mx-5 flex h-11 items-center justify-between border-b border-[#e8e8ed] bg-[#f5f5f7]/90 px-5 text-xs backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          <p className="font-semibold tracking-[-0.003em]">장민태</p>
          <p className="rounded-full bg-[#0071e3] px-4 py-2 text-sm text-white">Profile</p>
        </header>

        <div className="grid min-h-[calc(100vh-44px)] content-center gap-10 py-14 text-center">
          <div>
            <p className="text-2xl font-semibold tracking-[-0.015em] sm:text-3xl">{profile.name}</p>
            <h1 className="mx-auto mt-3 max-w-5xl text-[58px] font-bold leading-[1.04] tracking-[-0.022em] sm:text-[82px] lg:text-[96px]">
              데이터와 러닝을 좋아합니다.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl font-light leading-[1.4] tracking-[-0.01em] text-[#474747]">
              {profile.tagline}
            </p>
          </div>

          {/* 프로필 사진 영역: public/images 폴더의 파일을 화면에 보여줌 */}
          <div className="mx-auto w-full max-w-3xl rounded-[28px] bg-white p-4">
            <div className="relative mx-auto aspect-[4/5] max-h-[560px] overflow-hidden rounded-[24px] bg-[#f5f5f7]">
              <Image
                src={profile.image_path}
                alt={`${profile.name} 프로필 사진`}
                fill
                priority
                sizes="(min-width: 768px) 720px, calc(100vw - 72px)"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 기본 정보 카드: 바이브 코딩으로 가장 바꾸기 쉬운 데이터 영역 */}
        <div className="grid gap-5 py-10 sm:grid-cols-2">
          <div className="rounded-[28px] bg-white p-7">
            <p className="text-3xl font-bold tracking-[-0.015em] text-[#1d1d1f]">이름</p>
            <p className="mt-5 text-5xl font-bold leading-[1.07] tracking-[-0.019em] text-[#1d1d1f]">{profile.name}</p>
          </div>
          <div className="rounded-[28px] bg-white p-7">
            <p className="text-3xl font-bold tracking-[-0.015em] text-[#1d1d1f]">소속</p>
            <p className="mt-5 text-5xl font-bold leading-[1.07] tracking-[-0.019em] text-[#1d1d1f]">{profile.team}</p>
          </div>
        </div>

        {/* 소개 문장 영역: 학생들이 문구와 스타일을 바꾸는 연습용 섹션 */}
        <div className="grid gap-5 py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white p-7 sm:p-10">
            <h2 className="text-5xl font-bold leading-[1.07] tracking-[-0.019em] text-[#1d1d1f]">자기소개</h2>
            <p className="mt-6 max-w-3xl text-xl font-light leading-[1.4] tracking-[-0.01em] text-[#474747]">
              {profile.introduction}
            </p>
          </div>
          <div className="rounded-[28px] bg-white p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#f5f5f7]">
              <Image src="/images/tan-shiba.png" alt="탄 사진" fill sizes="(min-width: 1024px) 420px, calc(100vw - 72px)" className="object-cover" />
            </div>
          </div>
        </div>

        {/* 좋아하는 것 목록: 항목 추가/삭제 실습에 쓰기 좋은 영역 */}
        <div className="rounded-[28px] bg-white p-7 sm:p-10">
          <h2 className="text-5xl font-bold leading-[1.07] tracking-[-0.019em] text-[#1d1d1f]">특징</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="rounded-full bg-[#f5f5f7] px-6 py-4 text-center text-xl font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                {highlight.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
