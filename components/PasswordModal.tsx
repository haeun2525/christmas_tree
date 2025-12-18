import { useState, useRef, useEffect } from 'react';
import { X, Lock } from 'lucide-react';
import { Letter } from '../App';

type PasswordModalProps = {
  letter: Letter;
  onSuccess: () => void;
  onClose: () => void;
};

export function PasswordModal({ letter, onSuccess, onClose }: PasswordModalProps) {
  const [password, setPassword] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newPassword = [...password];
    newPassword[index] = value;
    setPassword(newPassword);
    setError(false);

    // 다음 입력 필드로 이동
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

    // 4자리 모두 입력되면 자동 확인
    if (index === 3 && value) {
      const enteredPassword = newPassword.join('');
      setTimeout(() => checkPassword(enteredPassword), 100);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !password[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const checkPassword = (enteredPassword: string) => {
    if (enteredPassword === letter.password) {
      onSuccess();
    } else {
      setError(true);
      setPassword(['', '', '', '']);
      inputRefs[0].current?.focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Lock className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-gray-900 mb-2">편지 열기</h2>
          <p className="text-gray-600">4자리 비밀번호를 입력하세요</p>
        </div>

        <div className="mb-6">
          <div className="flex gap-3 justify-center mb-4">
            {password.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-14 h-14 text-center text-2xl border-2 rounded-xl transition-all ${
                  error
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
                } outline-none`}
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-center text-sm">
              비밀번호가 일치하지 않습니다. 다시 시도해주세요.
            </p>
          )}
        </div>

        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <p className="text-gray-600 text-sm mb-1">편지 제목</p>
          <p className="text-gray-900">{letter.title}</p>
        </div>
      </div>
    </div>
  );
}
