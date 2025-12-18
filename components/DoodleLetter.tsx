type DoodleLetterProps = {
  letterId: string;
  title: string;
};

const envelopeDesigns = [
  // Design 1: 하트 봉인 편지
  {
    bgColor: '#FFF5E1',
    strokeColor: '#8B4513',
    svg: (
      <>
        <path d="M8 8 L8 36 L60 36 L60 8 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 8 L34 24 L60 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 20 C28 18 30 16 32 16 C34 16 36 18 36 20 C36 24 32 28 32 28 C32 28 28 24 28 20 Z" fill="#FF6B9D" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  // Design 2: 스탬프 편지
  {
    bgColor: '#E8F4F8',
    strokeColor: '#2C5F7C',
    svg: (
      <>
        <rect x="8" y="10" width="52" height="30" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10 L34 28 L60 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="48" y="14" width="8" height="6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1,1" />
      </>
    ),
  },
  // Design 3: 리본 편지
  {
    bgColor: '#FFF0F5',
    strokeColor: '#C71585',
    svg: (
      <>
        <path d="M10 12 L10 38 L58 38 L58 12 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 12 L34 26 L58 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 22 L34 18 L38 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 22 L28 26 M38 22 L40 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  // Design 4: 하트 패턴 편지
  {
    bgColor: '#E0F2FF',
    strokeColor: '#1E3A8A',
    svg: (
      <>
        <path d="M10 10 L10 36 L58 36 L58 10 Z" fill="currentColor" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M10 10 L34 26 L58 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 16 C16 15 17 14 18 14 C19 14 20 15 20 16 C20 18 18 20 18 20 C18 20 16 18 16 16 Z" fill="currentColor" />
        <path d="M48 16 C48 15 49 14 50 14 C51 14 52 15 52 16 C52 18 50 20 50 20 C50 20 48 18 48 16 Z" fill="currentColor" />
      </>
    ),
  },
  // Design 5: 우표 스타일
  {
    bgColor: '#FFF9E6',
    strokeColor: '#8B6914',
    svg: (
      <>
        <path d="M8 14 L8 38 L60 38 L60 14 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 14 L34 26 L60 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="12" y="18" width="6" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
        <rect x="12" y="24" width="6" height="4" fill="none" stroke="currentColor" strokeWidth="1" />
      </>
    ),
  },
  // Design 6: 꽃 장식 편지
  {
    bgColor: '#FFE4E1',
    strokeColor: '#8B3A3A',
    svg: (
      <>
        <path d="M10 12 L10 36 L58 36 L58 12 Z" fill="currentColor" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M10 12 L34 24 L58 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="#FF69B4" stroke="currentColor" strokeWidth="1" />
        <circle cx="48" cy="20" r="2" fill="#FF69B4" stroke="currentColor" strokeWidth="1" />
        <path d="M24 22 L26 24 L24 26" fill="none" stroke="#4A7C59" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  // Design 7: 물결 테두리
  {
    bgColor: '#F0E6FF',
    strokeColor: '#6B46C1',
    svg: (
      <>
        <path d="M10 10 Q12 8 14 10 T18 10 T22 10 T26 10 T30 10 T34 10 T38 10 T42 10 T46 10 T50 10 T54 10 T58 10 L58 36 Q56 38 54 36 T50 36 T46 36 T42 36 T38 36 T34 36 T30 36 T26 36 T22 36 T18 36 T14 36 T10 36 Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
        <path d="M10 10 L34 24 L58 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
  },
  // Design 8: 실 묶음 편지
  {
    bgColor: '#FFF8DC',
    strokeColor: '#8B7355',
    svg: (
      <>
        <rect x="10" y="12" width="48" height="26" rx="1" fill="currentColor" stroke="currentColor" strokeWidth="2" />
        <path d="M34 12 L34 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 18 Q34 16 38 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="36" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
];

export function DoodleLetter({ letterId, title }: DoodleLetterProps) {
  // letterId 기반으로 일관된 디자인 선택
  const designIndex = parseInt(letterId) % envelopeDesigns.length;
  const design = envelopeDesigns[designIndex];

  // 크리스마스 이모지 배열
  const christmasEmojis = ['🎄', '🎅', '⛄', '❄️', '🎁', '⭐', '🔔', '🦌'];
  const emojiIndex = parseInt(letterId) % christmasEmojis.length;
  const emoji = christmasEmojis[emojiIndex];

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <div className="relative w-full max-w-[180px] aspect-[4/3]">
        <svg
          viewBox="0 0 68 48"
          className="w-full h-full drop-shadow-lg hover:drop-shadow-xl transition-all"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
        >
          {/* 배경 */}
          <rect x="0" y="0" width="68" height="48" fill={design.bgColor} rx="3" />
          
          {/* 디자인 요소 */}
          <g style={{ color: design.strokeColor }}>
            {design.svg}
          </g>
          
          {/* 손그림 느낌의 테두리 */}
          <path
            d="M2 2 L66 2 L66 46 L2 46 Z"
            fill="none"
            stroke={design.strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.3"
            style={{
              strokeDasharray: '2,1',
            }}
          />
          
          {/* 중앙 크리스마스 이모지 */}
          <text
            x="34"
            y="28"
            fontSize="20"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {emoji}
          </text>
        </svg>
        
        {/* 잠금 아이콘 */}
        <div 
          className="absolute -bottom-2 -right-2 rounded-full p-1.5 shadow-md"
          style={{ backgroundColor: design.bgColor }}
        >
          <svg 
            className="w-4 h-4" 
            fill="none" 
            stroke={design.strokeColor}
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>
      
      {/* 제목과 크리스마스 이모지 표시 */}
      <div className="text-center">
        <h3 className="text-white text-shadow-sm">{title} {emoji}</h3>
      </div>
    </div>
  );
}