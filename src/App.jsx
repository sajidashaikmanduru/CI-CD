function App() {
  const fullPageStyle = {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  };

  const textStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    backgroundColor: '#ffffff',
    padding: '2rem 3rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={fullPageStyle}>
      <div style={textStyle}>
        This is a CI/CD project 
      </div>
    </div>
  );
}

export default App;