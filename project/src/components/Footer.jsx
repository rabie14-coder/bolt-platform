import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: '#94a3b8',
      padding: '60px 20px 30px',
      marginTop: '80px',
      fontFamily: "'Tajawal', sans-serif"
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '60px',
          marginBottom: '40px'
        }}>
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', marginBottom: '16px' }}>
              🤖 BotDZ
            </h3>
            <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
              منصة الجزائر الأولى للتجارة الإلكترونية الذكية.<br/>
              نربط بين التجار والعملاء بأمان وسهولة.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '1rem', marginBottom: '8px' }}>
                المنصة
              </h4>
              <a href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>الرئيسية</a>
              <a href="/products" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>المنتجات</a>
              <a href="/merchants" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>التجار</a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '1rem', marginBottom: '8px' }}>
                الدعم
              </h4>
              <a href="/help" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>مركز المساعدة</a>
              <a href="https://wa.me/213XXXXXXXXX" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>
                📱 واتساب
              </a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '1rem', marginBottom: '8px' }}>
                قانوني
              </h4>
              <a href="/terms.html" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>شروط الاستخدام</a>
              <a href="/privacy.html" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>سياسة الخصوصية</a>
              <a href="/checkout.html" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>إتمام الطلب</a>
            </div>
          </div>
        </div>
        
        <div style={{ height: '1px', background: 'rgba(148, 163, 184, 0.2)', marginBottom: '30px' }}></div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ fontSize: '0.85rem' }}>© {currentYear} BotDZ. جميع الحقوق محفوظة.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ color: '#94a3b8', fontSize: '1.2rem', textDecoration: 'none' }}>📘</a>
            <a href="#" style={{ color: '#94a3b8', fontSize: '1.2rem', textDecoration: 'none' }}>📸</a>
            <a href="https://wa.me/213XXXXXXXXX" style={{ color: '#94a3b8', fontSize: '1.2rem', textDecoration: 'none' }}>💬</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
