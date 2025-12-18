import { useState } from 'react';
import { ArrowLeft, Plus, Trash2, Mail, Edit, Inbox } from 'lucide-react';
import { Letter, LetterRequest } from '../App';

type AdminPanelProps = {
  letters: Letter[];
  onSaveLetter: (letter: Letter) => void;
  onDeleteLetter: (id: string) => void;
  onBack: () => void;
  requests: LetterRequest[];
  onAddRequest: (name: string) => void;
  onToggleRequestComplete: (id: string) => void;
  onDeleteRequest: (id: string) => void;
};

export function AdminPanel({ 
  letters, 
  onSaveLetter, 
  onDeleteLetter, 
  onBack,
  requests,
  onToggleRequestComplete,
  onDeleteRequest,
}: AdminPanelProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingLetterId, setEditingLetterId] = useState<string | null>(null);
  const [requestsTab, setRequestsTab] = useState<'all' | 'pending' | 'completed'>('all');
  const [formData, setFormData] = useState({
    title: '',
    password: '',
    background: 'santa',
    content: '',
  });

  const handleEdit = (letter: Letter) => {
    setFormData({
      title: letter.title,
      password: letter.password,
      background: letter.background,
      content: letter.content,
    });
    setEditingLetterId(letter.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.password || !formData.content) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    if (formData.password.length !== 4) {
      alert('비밀번호는 4자리여야 합니다.');
      return;
    }

    if (editingLetterId) {
      // 기존 편지 수정
      const updatedLetter: Letter = {
        id: editingLetterId,
        title: formData.title,
        from: '하은',
        password: formData.password,
        background: formData.background,
        content: formData.content,
        createdAt: letters.find(l => l.id === editingLetterId)?.createdAt || new Date().toISOString(),
      };
      onSaveLetter(updatedLetter);
      alert('편지가 수정되었습니다!');
    } else {
      // 새 편지 작성
      const newLetter: Letter = {
        id: Date.now().toString(),
        title: formData.title,
        from: '하은',
        password: formData.password,
        background: formData.background,
        content: formData.content,
        createdAt: new Date().toISOString(),
      };
      onSaveLetter(newLetter);
      alert('편지가 저장되었습니다!');
    }

    setFormData({ title: '', password: '', background: 'santa', content: '' });
    setEditingLetterId(null);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen relative z-10 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="text-white hover:text-blue-200 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            메인으로
          </button>
          <h1 className="text-white">🛡️ 관리자 패널</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            새 편지 작성
          </button>
        </div>

        {/* 새 편지 작성 폼 */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <h2 className="text-gray-900 mb-6">{editingLetterId ? '편지 수정' : '새 편지 작성'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  편지 제목 *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="예: 사랑하는 당신에게"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  비밀번호 (4자리) *
                </label>
                <input
                  type="text"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="4자리 숫자/문자"
                  maxLength={4}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  편지 배경 테마 *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: 'santa', label: '산타 🎅', gradient: 'from-red-100 to-pink-100' },
                    { value: 'tree', label: '트리 🎄', gradient: 'from-green-100 to-lime-100' },
                    { value: 'snow', label: '눈 ❄️', gradient: 'from-blue-100 to-sky-100' },
                    { value: 'gift', label: '선물 🎁', gradient: 'from-yellow-100 to-amber-100' },
                  ].map((bg) => (
                    <button
                      key={bg.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, background: bg.value })}
                      className={`p-4 rounded-xl bg-gradient-to-br ${bg.gradient} border-2 transition-all ${
                        formData.background === bg.value
                          ? 'border-green-500 ring-4 ring-green-500/20'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="text-gray-800">{bg.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  편지 내용 *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="따뜻한 마음을 전하세요..."
                  rows={8}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors"
                >
                  {editingLetterId ? '편지 수정 완료' : '편지 저장'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingLetterId(null);
                    setFormData({ title: '', password: '', background: 'santa', content: '' });
                  }}
                  className="px-6 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 rounded-lg transition-colors"
                >
                  취소
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 편지 목록 */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-gray-900 mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6" />
            전체 편지 관리 ({letters.length}개)
          </h2>
          
          {letters.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-2">아직 편지가 없습니다</p>
              <p className="text-gray-400 text-sm">새 편지를 작성해보세요!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {letters.map((letter) => (
                <div
                  key={letter.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-gray-900">{letter.title}</h3>
                    <div className="flex gap-4 mt-1">
                      <p className="text-gray-600 text-sm">ID: {letter.id}</p>
                      <p className="text-gray-400 text-sm">PW: {letter.password}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(letter)}
                      className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-lg transition-all"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`"${letter.title}" 편지를 삭제하시겠습니까?`)) {
                          onDeleteLetter(letter.id);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 요청함 섹션 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">
          <h2 className="text-gray-900 mb-6 flex items-center gap-2">
            <Inbox className="w-6 h-6" />
            요청함 ({requests.length}개)
          </h2>

          {/* 탭 */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setRequestsTab('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                requestsTab === 'all'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              전체 ({requests.length})
            </button>
            <button
              onClick={() => setRequestsTab('pending')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                requestsTab === 'pending'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              작성 전 ({requests.filter(r => !r.completed).length})
            </button>
            <button
              onClick={() => setRequestsTab('completed')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                requestsTab === 'completed'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              작성 완료 ({requests.filter(r => r.completed).length})
            </button>
          </div>
          
          {requests.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-2">아직 요청이 없습니다</p>
              <p className="text-gray-400 text-sm">사용자가 편지를 요청하면 여기에 표시됩니다.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {requests
                .filter(r => 
                  requestsTab === 'all' || 
                  (requestsTab === 'pending' && !r.completed) || 
                  (requestsTab === 'completed' && r.completed)
                )
                .map((request) => (
                  <div
                    key={request.id}
                    className={`flex items-center justify-between p-4 rounded-xl transition-colors ${
                      request.completed
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="checkbox"
                        checked={request.completed}
                        onChange={() => onToggleRequestComplete(request.id)}
                        className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-2 focus:ring-green-500 cursor-pointer"
                      />
                      <div className="flex-1">
                        <h3 className={`text-gray-900 ${request.completed ? 'line-through opacity-50' : ''}`}>
                          {request.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {new Date(request.createdAt).toLocaleDateString('ko-KR')} {new Date(request.createdAt).toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (confirm(`"${request.name}"의 요청을 삭제하시겠습니까?`)) {
                          onDeleteRequest(request.id);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}