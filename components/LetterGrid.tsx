import { useState } from 'react';
import { Lock } from 'lucide-react';
import { Letter } from '../App';
import { PasswordModal } from './PasswordModal';
import { LetterView } from './LetterView';
import { DoodleLetter } from './DoodleLetter';
import { RequestModal } from './RequestModal';

type LetterGridProps = {
  letters: Letter[];
  onAddRequest: (name: string) => void;
};

export function LetterGrid({ letters, onAddRequest }: LetterGridProps) {
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showLetterView, setShowLetterView] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);

  const handleLetterClick = (letter: Letter) => {
    setSelectedLetter(letter);
    setShowPasswordModal(true);
  };

  const handlePasswordSuccess = () => {
    setShowPasswordModal(false);
    setShowLetterView(true);
  };

  const handleCloseLetter = () => {
    setShowLetterView(false);
    setSelectedLetter(null);
  };

  const handleSubmitRequest = (name: string) => {
    onAddRequest(name);
    setShowRequestModal(false);
    alert('요청이 전송되었습니다! 하은님이 확인할 거예요 😊');
  };

  const handleCloseRequestModal = () => {
    setShowRequestModal(false);
    setSelectedLetter(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {letters.map((letter) => (
            <div
              key={letter.id}
              onClick={() => handleLetterClick(letter)}
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <DoodleLetter letterId={letter.id} title={letter.title} />
            </div>
          ))}
          
          {/* 편지 요청 버튼 */}
          <div
            onClick={() => setShowRequestModal(true)}
            className="cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="relative w-full max-w-[180px] aspect-[4/3]">
                <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center hover:bg-white/20 hover:border-white/50 transition-all">
                  <div className="text-center">
                    <div className="text-5xl mb-2">😢</div>
                    <p className="text-white text-sm opacity-80">편지가 없나요?</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-white text-shadow-sm">편지 요청하기</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPasswordModal && selectedLetter && (
        <PasswordModal
          letter={selectedLetter}
          onSuccess={handlePasswordSuccess}
          onClose={() => {
            setShowPasswordModal(false);
            setSelectedLetter(null);
          }}
        />
      )}

      {showLetterView && selectedLetter && (
        <LetterView letter={selectedLetter} onClose={handleCloseLetter} />
      )}

      {showRequestModal && (
        <RequestModal
          onSubmit={handleSubmitRequest}
          onClose={() => setShowRequestModal(false)}
        />
      )}
    </>
  );
}