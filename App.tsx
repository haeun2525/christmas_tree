import { useState } from 'react';
import { LetterGrid } from './components/LetterGrid';
import { AdminLogin } from './components/AdminLogin';
import { AdminPanel } from './components/AdminPanel';
import { Snowfall } from './components/Snowfall';
import { WinterScene } from './components/WinterScene';

export type Letter = {
  id: string;
  title: string;
  from: string;
  password: string;
  background: string;
  content: string;
  createdAt: string;
};

export type LetterRequest = {
  id: string;
  name: string;
  completed: boolean;
  createdAt: string;
};

export default function App() {
  const [view, setView] = useState<'main' | 'admin-login' | 'admin'>('main');
  const [letters, setLetters] = useState<Letter[]>(() => {
    const saved = localStorage.getItem('christmas-letters');
    if (saved) {
      return JSON.parse(saved);
    }
    // 샘플 데이터
    return [
      {
        id: '1',
        title: '사랑하는 당신에게',
        from: '산타',
        password: '1225',
        background: 'red',
        content: '메리 크리스마스! 올해도 착한 일을 많이 해주셔서 감사합니다. 🎅',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: '가족에게',
        from: '엄마',
        password: '0000',
        background: 'green',
        content: '사랑하는 우리 가족, 행복한 크리스마스 보내세요. 항상 건강하고 행복하길 바랍니다. ❤️',
        createdAt: new Date().toISOString(),
      },
      {
        id: '3',
        title: '친구야!',
        from: '민수',
        password: '1234',
        background: 'blue',
        content: '친구야, 올해도 함께해줘서 고마워! 메리 크리스마스! 🎄',
        createdAt: new Date().toISOString(),
      },
    ];
  });

  const [requests, setRequests] = useState<LetterRequest[]>(() => {
    const saved = localStorage.getItem('letter-requests');
    return saved ? JSON.parse(saved) : [];
  });

  const handleAddRequest = (name: string) => {
    const newRequest: LetterRequest = {
      id: Date.now().toString(),
      name,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    const updatedRequests = [...requests, newRequest];
    setRequests(updatedRequests);
    localStorage.setItem('letter-requests', JSON.stringify(updatedRequests));
  };

  const handleToggleRequestComplete = (id: string) => {
    const updatedRequests = requests.map(req =>
      req.id === id ? { ...req, completed: !req.completed } : req
    );
    setRequests(updatedRequests);
    localStorage.setItem('letter-requests', JSON.stringify(updatedRequests));
  };

  const handleDeleteRequest = (id: string) => {
    const updatedRequests = requests.filter(req => req.id !== id);
    setRequests(updatedRequests);
    localStorage.setItem('letter-requests', JSON.stringify(updatedRequests));
  };

  const handleSaveLetter = (letter: Letter) => {
    const existingIndex = letters.findIndex(l => l.id === letter.id);
    let updatedLetters;
    
    if (existingIndex >= 0) {
      // 기존 편지 수정
      updatedLetters = [...letters];
      updatedLetters[existingIndex] = letter;
    } else {
      // 새 편지 추가
      updatedLetters = [...letters, letter];
    }
    
    setLetters(updatedLetters);
    localStorage.setItem('christmas-letters', JSON.stringify(updatedLetters));
  };

  const handleDeleteLetter = (id: string) => {
    const updatedLetters = letters.filter(l => l.id !== id);
    setLetters(updatedLetters);
    localStorage.setItem('christmas-letters', JSON.stringify(updatedLetters));
  };

  const handleAdminLogin = () => {
    setView('admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      <Snowfall />
      <WinterScene />
      
      {view === 'main' && (
        <div className="relative z-10">
          
          <header className="text-center py-8 px-4">
            <h1 className="text-white mb-2">🎄 하은이의 크리스마스 편지함 🎄</h1>
            <p className="text-blue-100">2025년, 길고도 짧았던 1년동안 저와 인연을 맺어온 여러분께... 편지를 한 번 써보겠습니다 ㅎ.ㅎ</p>
          </header>

          <LetterGrid letters={letters} onAddRequest={handleAddRequest} />

          <button
            onClick={() => setView('admin-login')}
            className="fixed bottom-8 right-8 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-2 rounded-lg backdrop-blur-sm transition-all opacity-50 hover:opacity-100"
          >
            관리자
          </button>
        </div>
      )}

      {view === 'admin-login' && (
        <AdminLogin
          onLogin={handleAdminLogin}
          onBack={() => setView('main')}
        />
      )}

      {view === 'admin' && (
        <AdminPanel
          letters={letters}
          onSaveLetter={handleSaveLetter}
          onDeleteLetter={handleDeleteLetter}
          onBack={() => setView('main')}
          requests={requests}
          onAddRequest={handleAddRequest}
          onToggleRequestComplete={handleToggleRequestComplete}
          onDeleteRequest={handleDeleteRequest}
        />
      )}
    </div>
  );
}