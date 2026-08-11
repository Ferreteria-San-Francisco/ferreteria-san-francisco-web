import { useState } from 'react';
import faqData from '../../features/home/data/faqData.js';
import raulitoIcon from '../../assets/images/Raulito.png';

const WHATSAPP_NUMBER = '5491131509571';
const whatsappMessage = 'Hola! Tengo una consulta: ';
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

export default function FaqChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    setSelectedFaq(null);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className="w-80 max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ backgroundColor: 'var(--app-surface)', border: '1px solid var(--app-border)' }}
          role="dialog"
          aria-label="Preguntas frecuentes"
        >
          <div
            className="px-4 py-3 flex items-center gap-3"
            style={{ backgroundColor: 'rgba(246, 199, 0, 0.12)', borderBottom: '1px solid var(--app-border)' }}
          >
            <img src={raulitoIcon} alt="" className="w-12 h-12 shrink-0 rounded-full" />
            <div>
              <p className="font-semibold" style={{ color: 'var(--app-text)' }}>Ferretería San Francisco</p>
              <p className="text-sm" style={{ color: 'var(--app-text-muted)' }}>¿En qué podemos ayudarte?</p>
            </div>
          </div>

          <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
            {!selectedFaq ? (
              faqData.map((faq) => (
                <button
                  key={faq.question}
                  onClick={() => setSelectedFaq(faq)}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors hover:opacity-80"
                  style={{ backgroundColor: 'var(--app-bg)', color: 'var(--app-text)', border: '1px solid var(--app-border)' }}
                >
                  {faq.question}
                </button>
              ))
            ) : (
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: 'var(--app-text)' }}>
                  {selectedFaq.question}
                </p>
                <p className="text-sm mb-3" style={{ color: 'var(--app-text-muted)' }}>
                  {selectedFaq.answer}
                </p>
                <button
                  onClick={() => setSelectedFaq(null)}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  ← Volver a las preguntas
                </button>
              </div>
            )}
          </div>

          <div className="p-4 pt-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar por WhatsApp"
              className="flex items-center justify-center text-center gap-2 w-full py-2 rounded-lg text-white text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-whatsapp)' }}
            >
              ¿No encontraste tu respuesta? Escribinos
            </a>
          </div>
        </div>
      )}

      <button
        onClick={toggleOpen}
        aria-label={isOpen ? 'Cerrar preguntas frecuentes' : 'Abrir preguntas frecuentes'}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center overflow-hidden transition-transform hover:scale-105"
        style={{
          backgroundColor: isOpen ? 'var(--color-primary-dark)' : 'var(--app-surface)',
          border: isOpen ? 'none' : '2px dashed var(--color-primary)',
        }}
      >
        {isOpen ? (
          <span className="text-2xl text-white">✕</span>
        ) : (
          <img src={raulitoIcon} alt="Abrir preguntas frecuentes" className="w-[85%] h-[85%] object-contain rounded-full" />
        )}
      </button>
    </div>
  );
}
