export function WinterScene() {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-0">
      <svg
        viewBox="0 0 1440 400"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        {/* 뒷 배경 트리들 (더 어두운) */}
        <g opacity="0.3">
          <path d="M100 280 L120 240 L140 280 Z" fill="#1e3a5f" />
          <rect x="117" y="280" width="6" height="20" fill="#0f1e33" />
          
          <path d="M200 260 L225 210 L250 260 Z" fill="#1e3a5f" />
          <rect x="222" y="260" width="6" height="25" fill="#0f1e33" />
          
          <path d="M1200 270 L1230 220 L1260 270 Z" fill="#1e3a5f" />
          <rect x="1227" y="270" width="6" height="25" fill="#0f1e33" />
          
          <path d="M1350 285 L1370 250 L1390 285 Z" fill="#1e3a5f" />
          <rect x="1367" y="285" width="6" height="15" fill="#0f1e33" />
        </g>

        {/* 눈이 쌓인 언덕들 */}
        <path
          d="M0 350 Q200 320 400 340 T800 330 T1200 345 T1440 330 L1440 400 L0 400 Z"
          fill="#e8f4f8"
          opacity="0.4"
        />
        <path
          d="M0 360 Q300 340 600 355 T1000 350 T1440 345 L1440 400 L0 400 Z"
          fill="#f0f8ff"
          opacity="0.6"
        />
        <path
          d="M0 370 Q250 355 500 365 T900 360 T1440 355 L1440 400 L0 400 Z"
          fill="#ffffff"
        />

        {/* 작은 집 */}
        <g transform="translate(300, 280)">
          {/* 집 본체 */}
          <rect x="0" y="40" width="70" height="50" fill="#c85a54" />
          {/* 지붕 */}
          <path d="M-5 40 L35 10 L75 40 Z" fill="#8b3a3a" />
          {/* 굴뚝 */}
          <rect x="50" y="15" width="8" height="15" fill="#6b2a2a" />
          <rect x="48" y="10" width="12" height="5" fill="#8b3a3a" />
          {/* 창문 */}
          <rect x="15" y="55" width="15" height="15" fill="#ffd700" opacity="0.8" />
          <rect x="45" y="55" width="15" height="15" fill="#ffd700" opacity="0.8" />
          {/* 문 */}
          <rect x="28" y="65" width="14" height="25" fill="#5a3a2a" />
          <circle cx="38" cy="77" r="1.5" fill="#ffd700" />
          {/* 지붕 눈 */}
          <ellipse cx="35" cy="10" rx="40" ry="6" fill="#ffffff" opacity="0.9" />
        </g>

        {/* 눈사람 */}
        <g transform="translate(550, 290)">
          {/* 하단 몸통 */}
          <ellipse cx="30" cy="70" rx="25" ry="24" fill="#ffffff" />
          {/* 중간 몸통 */}
          <ellipse cx="30" cy="42" rx="18" ry="17" fill="#ffffff" />
          {/* 머리 */}
          <ellipse cx="30" cy="20" rx="13" ry="12" fill="#ffffff" />
          {/* 모자 */}
          <rect x="20" y="8" width="20" height="3" fill="#ff3333" />
          <rect x="23" y="0" width="14" height="10" fill="#ff3333" />
          {/* 눈 */}
          <circle cx="26" cy="18" r="1.5" fill="#2c2c2c" />
          <circle cx="34" cy="18" r="1.5" fill="#2c2c2c" />
          {/* 당근 코 */}
          <path d="M30 20 L38 21 L30 22 Z" fill="#ff8833" />
          {/* 입 */}
          <path d="M26 24 Q30 26 34 24" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeLinecap="round" />
          {/* 버튼 */}
          <circle cx="30" cy="38" r="1.5" fill="#2c2c2c" />
          <circle cx="30" cy="45" r="1.5" fill="#2c2c2c" />
          <circle cx="30" cy="60" r="2" fill="#2c2c2c" />
          <circle cx="30" cy="70" r="2" fill="#2c2c2c" />
          {/* 목도리 */}
          <ellipse cx="30" cy="30" rx="15" ry="4" fill="#ff3333" />
          <rect x="42" y="28" width="8" height="12" fill="#ff3333" />
          <rect x="40" y="38" width="3" height="4" fill="#ff3333" />
          <rect x="45" y="38" width="3" height="4" fill="#ff3333" />
        </g>

        {/* 선물 상자들 */}
        <g transform="translate(650, 325)">
          {/* 빨간 선물 */}
          <rect x="0" y="20" width="25" height="25" fill="#ff3333" />
          <rect x="11" y="20" width="3" height="25" fill="#ffd700" />
          <rect x="0" y="31" width="25" height="3" fill="#ffd700" />
          <path d="M8 20 Q12.5 15 17 20" fill="none" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* 초록 선물 */}
          <rect x="30" y="28" width="20" height="20" fill="#2d8659" />
          <rect x="38.5" y="28" width="3" height="20" fill="#ffd700" />
          <rect x="30" y="36.5" width="20" height="3" fill="#ffd700" />
          <path d="M35 28 Q40 24 45 28" fill="none" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
          
          {/* 노란 선물 */}
          <rect x="10" y="0" width="18" height="18" fill="#ffcc33" />
          <rect x="18" y="0" width="2" height="18" fill="#ff3333" />
          <rect x="10" y="8" width="18" height="2" fill="#ff3333" />
          <path d="M15 0 Q19 -3 23 0" fill="none" stroke="#ff3333" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* 큰 크리스마스 트리 */}
        <g transform="translate(900, 230)">
          {/* 나무 기둥 */}
          <rect x="55" y="140" width="20" height="30" fill="#5a3a2a" />
          
          {/* 트리 층 (아래에서 위로) */}
          <path d="M20 140 L65 60 L110 140 Z" fill="#2d8659" />
          <path d="M30 110 L65 40 L100 110 Z" fill="#3aa76d" />
          <path d="M40 85 L65 25 L90 85 Z" fill="#4fbf8a" />
          
          {/* 별 */}
          <g transform="translate(65, 10)">
            <path d="M0 -8 L2 -2 L8 -2 L3 2 L5 8 L0 4 L-5 8 L-3 2 L-8 -2 L-2 -2 Z" fill="#ffd700" />
          </g>
          
          {/* 장식 공들 */}
          <circle cx="45" cy="75" r="4" fill="#ff3333" />
          <circle cx="85" cy="80" r="4" fill="#3399ff" />
          <circle cx="55" cy="95" r="4" fill="#ffd700" />
          <circle cx="75" cy="100" r="4" fill="#ff3333" />
          <circle cx="50" cy="120" r="4" fill="#ff69b4" />
          <circle cx="80" cy="125" r="4" fill="#3399ff" />
          <circle cx="35" cy="130" r="4" fill="#ffd700" />
          <circle cx="95" cy="130" r="4" fill="#ff69b4" />
          
          {/* 전구 효과 */}
          <circle cx="60" cy="50" r="2.5" fill="#ffff99" opacity="0.9" />
          <circle cx="70" cy="65" r="2.5" fill="#ffcccc" opacity="0.9" />
          <circle cx="50" cy="85" r="2.5" fill="#ccffff" opacity="0.9" />
          <circle cx="80" cy="90" r="2.5" fill="#ffff99" opacity="0.9" />
          <circle cx="40" cy="105" r="2.5" fill="#ffcccc" opacity="0.9" />
          <circle cx="90" cy="110" r="2.5" fill="#ccffff" opacity="0.9" />
        </g>

        {/* 작은 트리 오른쪽 */}
        <g transform="translate(1150, 290)">
          <rect x="20" y="60" width="8" height="15" fill="#5a3a2a" />
          <path d="M5 60 L24 30 L43 60 Z" fill="#2d8659" />
          <path d="M10 50 L24 25 L38 50 Z" fill="#3aa76d" />
          <circle cx="18" cy="40" r="2" fill="#ff3333" />
          <circle cx="30" cy="45" r="2" fill="#ffd700" />
          <circle cx="24" cy="55" r="2" fill="#3399ff" />
        </g>

        {/* 작은 트리 왼쪽 */}
        <g transform="translate(150, 300)">
          <rect x="18" y="50" width="6" height="12" fill="#5a3a2a" />
          <path d="M3 50 L21 28 L39 50 Z" fill="#2d8659" />
          <path d="M8 43 L21 25 L34 43 Z" fill="#3aa76d" />
          <circle cx="15" cy="35" r="1.5" fill="#ff3333" />
          <circle cx="27" cy="38" r="1.5" fill="#ffd700" />
          <circle cx="21" cy="45" r="1.5" fill="#3399ff" />
        </g>

        {/* 눈송이 효과 */}
        <g opacity="0.6">
          <circle cx="100" cy="320" r="2" fill="#ffffff" />
          <circle cx="250" cy="310" r="1.5" fill="#ffffff" />
          <circle cx="450" cy="305" r="2" fill="#ffffff" />
          <circle cx="700" cy="315" r="1.5" fill="#ffffff" />
          <circle cx="950" cy="300" r="2" fill="#ffffff" />
          <circle cx="1100" cy="310" r="1.5" fill="#ffffff" />
          <circle cx="1300" cy="305" r="2" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}
