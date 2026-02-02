const ResumeSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <h2 className="bakbak text-5xl" style={{ color: 'var(--text-primary)' }}>Resume</h2>
      <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
        Download my resume to learn more about my experience and skills.
      </p>
      <a
        href="https://drive.google.com/drive/folders/1WQQTwyCf1lLcoBnAZuZnU4gqnaBvP_cQ?usp=sharing"
        target="_blank"
        download
        className="inline-block px-8 py-4 rounded-lg text-lg transition-all"
        style={{
          backgroundColor: 'var(--accent-primary)',
          color: 'var(--text-primary)',
          boxShadow: '0 0 20px var(--accent-glow)',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-secondary)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--accent-primary)'}
      >
        Download Resume
      </a>
    </div>
  );
};

export default ResumeSection;
