import { useState } from 'react';
import { X } from 'lucide-react';

type RequestModalProps = {
  onSubmit: (name: string) => void;
  onClose: () => void;
};

export function RequestModal({ onSubmit, onClose }: RequestModalProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
      setName('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* 이모지 헤더 */}
        <div className="text-center mb-4">
          <div className="text-6xl mb-3">😢</div>
        </div>

        {/* 설명 텍스트 */}
        <p className="text-gray-700 text-center mb-6 leading-relaxed">
          허걱! 제가 당신에게 편지쓰기를 까먹었나요? 아래 당신의 이름을 적어, 하은님께 편지를 적어달라고 독촉해보세요!
        </p>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="당신의 이름을 적어주세요"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            전송
          </button>
        </form>
      </div>
    </div>
  );
}
