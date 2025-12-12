// File: src/App.jsx

import AgeCalculator from './AgeCalculator';
// Import any necessary CSS file, if you named it differently (e.g., './App.css')

function App() {
  return (
    // The main container for the whole website/app
    <div className="App">
      
      {/* Optional: Simple site header */}
      <header style={{ 
        textAlign: 'center', 
        padding: '20px', 
        borderBottom: '1px solid #eee', 
        marginBottom: '20px',
        backgroundColor: '#f8f9fa' 
      }}>
        <h1 style={{ color: '#343a40' }}>Age In Months Calculator</h1>
      </header>
      
      {/* The main calculator component where the logic lives */}
      <AgeCalculator />

      {/* Optional: Simple site footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '20px', 
        marginTop: '40px', 
        fontSize: '0.8em', 
        color: '#999',
        borderTop: '1px solid #eee'
      }}>
        <p>Built with React & Accurate Date Logic | Current Time: {new Date().toLocaleTimeString()}</p>
      </footer>
    </div>
  );
}

export default App;