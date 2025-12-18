import { useState, useRef, useEffect } from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

type AdminLoginProps = {
  onLogin: () => void;
  onBack: () => void;
};

const ADMIN_PASSWORD = '0101'; // 관리자 비밀번호

export function AdminLogin({ onLogin, onBack }: AdminLoginProps) {
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

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }

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
    if (enteredPassword === ADMIN_PASSWORD) {
      onLogin();
    } else {
      setError(true);
      setPassword(['', '', '', '']);
      inputRefs[0].current?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
      <button
        onClick={onBack}
        className="absolute top-8 left-8 text-white hover:text-blue-200 transition-colors flex items-center gap-2"
      >
        <ArrowLeft className="w-5 h-5" />
        돌아가기
      </button>

      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-100 rounded-full mb-4">
            <Shield className="w-10 h-10 text-purple-600" />
          </div>
          <h2 className="text-gray-900 mb-2">관리자 페이지</h2>
          <p className="text-gray-600">관리자 비밀번호를 입력하세요</p>
        </div>

        <div className="mb-6">
          <div className="flex gap-3 justify-center mb-4">
            {password.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className={`w-14 h-14 text-center text-2xl border-2 rounded-xl transition-all ${
                  error
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10'
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

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-gray-600 text-sm text-center">
            관리자 페이지에서는 새로운 편지를 작성하고 기존 편지를 관리할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
