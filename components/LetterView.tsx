import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { Letter } from '../App';

type LetterViewProps = {
  letter: Letter;
  onClose: () => void;
};

const backgroundThemes = {
  santa: {
    gradient: 'bg-gradient-to-br from-red-100 via-red-50 to-pink-100',
    emoji: '🎅',
  },
  tree: {
    gradient: 'bg-gradient-to-br from-green-100 via-lime-50 to-emerald-100',
    emoji: '🎄',
  },
  snow: {
    gradient: 'bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100',
    emoji: '❄️',
  },
  gift: {
    gradient: 'bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100',
    emoji: '🎁',
  },
  // Legacy 배경 지원
  red: {
    gradient: 'bg-gradient-to-br from-red-100 via-red-50 to-pink-100',
    emoji: '🎅',
  },
  green: {
    gradient: 'bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100',
    emoji: '🎄',
  },
  blue: {
    gradient: 'bg-gradient-to-br from-blue-100 via-sky-50 to-cyan-100',
    emoji: '❄️',
  },
  gold: {
    gradient: 'bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100',
    emoji: '🎁',
  },
};

export function LetterView({ letter, onClose }: LetterViewProps) {
  const theme = backgroundThemes[letter.background as keyof typeof backgroundThemes] || backgroundThemes.santa;

  // 떨어지는 아이콘 생성 (15개)
  const floatingIcons = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
  }));

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 bg-white text-gray-600 hover:text-gray-900 rounded-full p-2 shadow-lg transition-all hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        <div className={`${theme.gradient} rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden`}>
          {/* 떨어지는 애니메이션 아이콘 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            {floatingIcons.map((icon) => (
              <motion.div
                key={icon.id}
                className="absolute text-4xl"
                style={{
                  left: `${icon.left}%`,
                  top: '-10%',
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: icon.duration,
                  repeat: Infinity,
                  delay: icon.delay,
                  ease: 'linear',
                }}
              >
                {theme.emoji}
              </motion.div>
            ))}
          </div>

          {/* 장식 요소 */}
          <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
            <div className="text-6xl">🎄</div>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20">
            <div className="text-6xl">⭐</div>
          </div>

          <div className="relative z-10">
            {/* 헤더 */}
            <div className="text-center mb-8 pb-6 border-b-2 border-gray-300/30">
              <h2 className="text-gray-900 mb-3">{letter.title}</h2>
              <p className="text-gray-600">From: {letter.from}</p>
              <p className="text-gray-400 text-sm mt-1">
                {new Date(letter.createdAt).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            {/* 편지 내용 */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 mb-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                  {letter.content}
                </p>
              </div>
            </div>

            {/* 서명 */}
            <div className="text-right">
              <p className="text-gray-700 italic">- {letter.from} 드림</p>
            </div>

            {/* 크리스마스 장식 */}
            <div className="flex justify-center gap-4 mt-8 text-3xl">
              <span>🎅</span>
              <span>🎄</span>
              <span>🎁</span>
              <span>⛄</span>
              <span>🔔</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}